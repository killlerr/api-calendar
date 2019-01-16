<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <SuccessAlert></SuccessAlert>
            <DangerAlert></DangerAlert>
            <WarningAlert></WarningAlert>
            <div class="col-md-8 offset-md-2">
                <div class="row">
                    <div class="col-md-7 offset-md-2 pb-4">
                        <div class="row">
                            <div class="col-md-5">
                                <p class="lead">Selected Year:</p>
                                <div v-if="availability!=null">
                                <p class="lead">{{availability.state}}</p>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <b-form-select :options="options" v-model="selectedYear" @input="setYear" class="form-control"></b-form-select>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Special Day</th>
                        <th scope="col">Date</th>
                        <th scope="col">Visibility</th>
                        </tr>
                    </thead>
                    <tbody v-if ="specialDaysObject!=null">
                        <!-- <tr  v-for="(specialDay, i) in specialDays" v-bind:key="specialDay.id">
                            <th scope="row">{{specialDay.id}}</th>
                            <td>{{specialDay.name}}</td>
                            <td><flat-pickr v-model="dates[i]" class="form-control" :config="config" placeholder="Select date"></flat-pickr></td>                          
                            <td> <b-form-checkbox id="checkbox1"
                                            v-model="status"
                                            value="true"
                                            unchecked-value="false">
                                            </b-form-checkbox></td>                          
                        </tr> -->
                        <RowDays  v-for="special_date in specialDaysObject.special_dates" v-bind:key="special_date.id"
                                :id = special_date.id
                                :name = special_date.name
                                :date = special_date.date
                                :status = status
                                ></RowDays>
                    </tbody>
                </table>    
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-sm-8 offset-sm-2">
                <div class="row p-2">
                    <div class="col-sm-4 offset-sm-4">
                        <b-button class="w-100" @click="dangerAlert">Delete</b-button>
                    </div>
                    <div class="col-sm-4">
                        <b-button class="w-100" @click="onUpdate">Update</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import RowDays from '../components/RowDays.vue'

export default {
    auth: false,
    data() {
        return{
            imageData: "",
            updateDetails:{
                "state": true,
                "msg": "data_successfully_inserted"
            },
            date: null,
            dates: [],
            currentDate: new Date(),
            config:{
                minDate: "today",
                maxDate: new Date().fp_incr(-1), // 14 days from now
                dateFormat: "Y-m-d",
            },
            options: [2000],
            selectedYear: null,
            status: 'true',
            specialDaysObject: null,
            availability: null
        }
    },
    components: {
        flatPickr,
        RowDays
    },
    methods: {
        successAlert(){
            if(this.availability.state === 'false'){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },
        dtpSelected(){
            console.log('date selected')
        },
        setYear(){
            this.config.maxDate = this.selectedYear + '-12-31';
            this.config.minDate = this.selectedYear + '-01-01';
            this.change();
            this.dataAvailability();
        },
        arrYear(){
            for (var n = 0; n <=6; n++){
                this.options[n] =`${JSON.stringify((new Date().getFullYear())- 2 + n)}`
            }
        },
        warningAlert(){
            if(!this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_WARNING', this.alert);                          
            }            
        },
        onUpdate(){
            this.specialDays.forEach(element => {
                console.log(element);
            });
        },
        async change() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const specialDays = await this.$axios.$get(`http://calendar-app.arimac.digital/dashboard/special_dates/${this.selectedYear}`)
            this.specialDaysObject = specialDays
        },
        async dataAvailability() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const availability = await this.$axios.$get(`http://calendar-app.arimac.digital/dashboard/check_data_available/${this.selectedYear}`)
            this.availability = availability
            this.warningAlert();
        },
        
    },
    beforeMount(){
        this.arrYear()
    },
    mounted() {
        this.updatedSpecialDays = this.specialDays

    }

}
</script>

<style>



</style>
