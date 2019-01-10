<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <SuccessAlert></SuccessAlert>
            <div class="col-md-10 offset-md-1">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Special Day</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr  v-for="specialDay in specialDays" v-bind:key="specialDay.id">
                            <th scope="row">{{specialDay.id}}</th>
                            <td>{{specialDay.name}}</td>
                            <td>
                                <div>
                                    <div class="file-upload-form">
                                        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="text-area-wrap">
                                    <b-form-textarea id="textarea1"
                                                    v-model="texts"
                                                    placeholder="Enter something"
                                                    :rows="2"
                                                    :max-rows="6">
                                    </b-form-textarea>
                                </div>
                            </td>
                        </tr> -->
                        <RowSpecialDay v-for="specialDay in specialDays" 
                                    v-bind:key="specialDay.id"
                                    :id="specialDay.id"
                                    :name="specialDay.name"
                                    :file="specialDay.file"
                                    :text="specialDay.text"
                        >
                        </RowSpecialDay>
                    </tbody>
                </table>    
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-sm-4 offset-sm-7">
                <div class="row p-2">
                    <div class="col-sm-8">
                        <b-button class="w-100" @click="onUpdate">Update</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RowSpecialDay from '../components/RowSpecialDay.vue'

export default {
    auth: false,
    data() {
        return{
            imageData: "",
            file: null,
            text: '',
            "specialDays": [
                {
                    "id": 1,
                    "name": "Tamil Thai Pongal Day",
                    "file": 'asdsdsafasds',
                    "text": 'afdsfsf' 
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
            specialDaysUpdate: [],
            updateDetails:{
                "state": true,
                "msg": "data_successfully_inserted"
            }          }
    },
    methods: {
        successAlert(){
            if(this.updateDetails.msg === 'data_successfully_inserted'){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },
        onUpdate(){
            this.specialDays.forEach(element => {
                // console.log(element.id +' - '+ element.name +' - '+ element.date);
                console.log(element);
            });
        }             
    },
    components:{
        RowSpecialDay
    },
    mounted(){
        this.specialDaysUpdate  = this.specialDays;
    }
}
</script>

<style>



</style>
