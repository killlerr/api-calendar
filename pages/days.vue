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
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(specialDay, i) in specialDays" v-bind:key="specialDay.id">
                            <th scope="row">{{specialDay.id}}</th>
                            <td>{{specialDay.name}}</td>
                            <td><flat-pickr v-model="dates[i]" class="form-control" :config="config" placeholder="Select date"></flat-pickr></td>                          
                        </tr>
                        <!-- <RowDays v-for="specialDay in specialDays" v-bind:key="specialDay.id"
                                :id = specialDay.id
                                :name = specialDay.name
                                :date = date
                                ></RowDays> -->
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
            "specialDays": [
                {
                    "id": 1,
                    "name": "Tamil Thai Pongal Day",
                    "date": "2010-10-10"
                },
                {
                    "id": 2,
                    "name": "Duruthu Full Moon Poya Day"
                },
                {
                    "id": 3,
                    "name": "National Day"
                },
                {
                    "id": 4,
                    "name": "Navam Full Moon Poya Day"
                },
                {
                    "id": 5,
                    "name": "Mahasivarathri Day"
                },
                {
                    "id": 6,
                    "name": "Madin Full Moon Poya Day"
                },
                {
                    "id": 7,
                    "name": "Day prior to Sinhala & Tamil New Year Day"
                },
                {
                    "id": 8,
                    "name": "Sinhala & Tamil New Year Day"
                },
                {
                    "id": 9,
                    "name": "Bak Full Moon Poya Day"
                },
                {
                    "id": 10,
                    "name": "Good Friday"
                },
                {
                    "id": 11,
                    "name": "May Day"
                },
                {
                    "id": 12,
                    "name": "Vesak Full Moon Poya Day"
                },
                {
                    "id": 13,
                    "name": "Day following Vesak Full Moon Poya Day"
                },
                {
                    "id": 14,
                    "name": "Id Ul-Fitr"
                },
                {
                    "id": 15,
                    "name": "Poson Full Moon Poya Day"
                },
                {
                    "id": 16,
                    "name": "Esala Full Moon Poya Day"
                },
                {
                    "id": 17,
                    "name": "Id Ul-Alha"
                },
                {
                    "id": 18,
                    "name": "Nikini Full Moon Poya Day"
                },
                {
                    "id": 19,
                    "name": "Binara Full Moon Poya Day"
                },
                {
                    "id": 20,
                    "name": "Vap Full Moon Poya Day"
                },
                {
                    "id": 21,
                    "name": "Deepavali"
                },
                {
                    "id": 22,
                    "name": "Milad un-Nabi"
                },
                {
                    "id": 23,
                    "name": "Ill Full Moon Poya Day"
                },
                {
                    "id": 24,
                    "name": "Unduvap Full Moon Poya Day"
                },
                {
                    "id": 25,
                    "name": "Christmas Day"
                }
            ],
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
            selectedYear: null    
        }
    },
    components: {
        flatPickr,
        RowDays
    },
    methods: {
        successAlert(){
            if(this.updateDetails.msg === 'data_successfully_inserted'){
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
            this.alert = true;
            this.$nuxt.$emit('ALERT_WARNING', this.alert);
        },
        arrYear(){
            for (var n = 0; n <=6; n++){
                this.options[n] =`${JSON.stringify((new Date().getFullYear())- 2 + n)}`
            }
        },
        dangerAlert(){
            this.alert = true;
            this.$nuxt.$emit('ALERT_DANGER', this.alert); 
        },
        onUpdate(){
            this.specialDays.forEach(element => {
                // console.log(element.id +' - '+ element.name +' - '+ element.date);
                console.log(element);
            });
        }        
    },
    beforeMount(){
        this.arrYear()
    },


}
</script>

<style>



</style>
