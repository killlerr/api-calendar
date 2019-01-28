<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <SuccessAlert></SuccessAlert>
            <DangerAlert></DangerAlert>
            <!-- <WarningAlert></WarningAlert> -->
            <div class="col-md-8 offset-md-2">
                <div class="row">
                    <div class="col-md-7 offset-md-2 pb-4">
                        <div class="row">
                            <div class="col-md-5">
                                <p class="lead">Selected Year:</p>
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
                    <tbody>
                        <!-- <keep-alive> -->
                            <RowDays  v-for="(filledSpecialDay, index) in filledSpecialDays" v-bind:key="index"
                                    :date="filledSpecialDay"
                                    :selectedYear="selectedYear"
                                    ></RowDays>
                                                                        <!-- @select="parentData" -->
                        <!-- </keep-alive> -->
                    </tbody>
                </table> 
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-sm-8 offset-sm-2">
                <div class="row p-2">
                    <div class="col-sm-4 offset-sm-4">
                        <b-button class="w-100" @click="onDelete">Delete</b-button>
                    </div>
                    <div class="col-sm-4">
                        <b-button class="w-100" @click="onUpdate(filledSpecialDays)">Update</b-button>
                        <p>{{test}}</p>
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
import { mapActions, mapState } from 'vuex'
// import org.json.JSONArray;

export default {
    auth: false,
    data() {
        return{
            options: [2000],
            selectedYear: null,
            status: 'true',
            filledSpecialDays: null,
            availability: null,
            updatedResponse: null,
            onlyDates: null,
            updatedSpecialDays: null,
            test: null,
            obj: {
                update_special_dates: [],
            },
            object: {}

        }
    },
    components: {
        flatPickr,
        RowDays
    },
    computed:{
        ...mapState(['specialDays']),
    },
    methods: {
        ...mapActions([
            'fetchSpecialDays' 
        ]),
        dtpSelected(){
            console.log('date selected')
        },
        setYear(){
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
        dangerAlert(){
            if(!this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_DANGER', this.alert);                          
            }            
        },
        successAlert(){
            if(this.updatedResponse.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },
        // onUpdate(){
        //     console.log(this.filledSpecialDays)
        // },
        async change() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const specialDays = await this.$axios.$get(`dashboard/special_dates/${this.selectedYear}`)
            this.filledSpecialDays = specialDays.object.special_dates
            this.$store.dispatch('fetchSpecialDays', specialDays.object.special_dates)
        },
        async dataAvailability() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const availability = await this.$axios.$get(`dashboard/check_data_available/${this.selectedYear}`)
            this.availability = availability
            this.warningAlert();
        },
        async onUpdate(payload) {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const availabilityToUpdate = await this.$axios.$get(`dashboard/check_data_available/${this.selectedYear}`)
            console.log(availabilityToUpdate.msg);
            var obj = {
                update_special_dates : []
            }
            this.filledSpecialDays.map(function(element) {        
                obj.update_special_dates.push({ 
                    'id' : element.id,
                    'date' : element.date,
                    'is_main' : element.is_main
                });
            })
            var object = JSON.parse(JSON.stringify(obj))
            
            
                    console.log(JSON.stringify(obj))
                    console.log('obj')
                    console.log(object)

            if(availabilityToUpdate.state){
                const updateDateResponse = await this.$axios.$get(`dashboard/update_data/${this.selectedYear}`)
                console.log(updateDateResponse.msg)
                if(updateDateResponse.msg === 'data_successfully_inserted'){
                    console.log('if_data_successfully_inserted')
                    console.log(object)
                    const updateSpecialDaysResponse = await this.$axios.$post(`dashboard/update_special_dates`,object)
                    console.log(updateSpecialDaysResponse.result)
                }
            }
            else{
                    console.log('else_data_successfully_inserted')
                    console.log(object)
                    const updateSpecialDaysResponse = await this.$axios.$post(`dashboard/update_special_dates`,object)
                    console.log(updateSpecialDaysResponse.result)      
            }            
            // const updatedSpecialDaysArr = this.filledSpecialDays.map(function(el){
            //     delete el.name
            //     return el
            // })

            // console.log(updatedSpecialDaysArr)

            // this.test=JSON.stringify(this.$refs.tableDays);     
            // this.$axios.setHeader('Content-Type', 'application/json', [
            // 'post'
            // ])    

            // const updatedResponse = await this.$axios.$post(`dashboard/update_special_dates`,payload)        
            // this.updatedResponse = updatedResponse
            // this.successAlert();
            // console.log(payload)
            //Consider chnaging post request array name and removing the name property in array objects
        },
        async onDelete(){
            this.$axios.setHeader('Content-Type', 'application/json')          
            const delRes = await this.$axios.$get(`dashboard/delete_data/${this.selectedYear}`)
            console.log(delRes.state)
            console.log(delRes.msg)
            if(delRes.state){
                this.dangerAlert()
                this.change();
            }
        }
        
    },
    beforeMount(){
        this.arrYear()
    },
    mounted() {

        
    }

}

//on fist load data set is not loaded to preview
//on Year switch newly loaded rows doesnt load data
</script>

<style>



</style>
