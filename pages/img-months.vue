<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <!-- <SuccessAlert></SuccessAlert> -->
            <div class="col-md-8 offset-md-2">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Month</th>
                        <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr  v-for="month in months" v-bind:key="month.id">
                            <th scope="row">{{month.id}}</th>
                            <td>{{month.name}}</td>
                            <td>
                                <div>
                                    <div class="file-upload-form">
                                        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                                    </div>
                                </div>
                            </td>
                        </tr> -->
                        <RowMonths
                                v-for="(month, index) in months" :key="index"
                                :month = month
                                :file = file
                                @imgMonthchange="uploadMonthImg($event, index)"
                                ></RowMonths>
                    </tbody>
                </table>    
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-sm-4 offset-sm-7">
                <div class="row p-2">
                    <div class="col-sm-8">
                        <!-- <b-button class="w-100" @click="onUpdate">Update</b-button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RowMonths from '../components/RowMonths'

export default {
    // auth: false,
    data() {
        return{
            file: null,            
            months: [
                {
                    id: 1,
                    name: 'January',
                    counter: 0  
                },
                {
                    id: 2,
                    name: 'February',
                    counter: 0  
                },
                {
                    id: 3,
                    name: 'March',
                    counter: 0  
                },
                {
                    id: 4,
                    name: 'April',
                    counter: 0  
                },
                {
                    id: 5,
                    name: 'May',
                    counter: 0  
                },
                {
                    id: 6,
                    name: 'June',
                    counter: 0  
                },
                {
                    id: 7,
                    name: 'July',
                    counter: 0  
                },
                {
                    id: 8,
                    name: 'August',
                    counter: 0  
                },
                {
                    id: 9,
                    name: 'September',
                    counter: 0  
                },
                {
                    id: 10,
                    name: 'October',
                    counter: 0  
                },
                {
                    id: 11,
                    name: 'November',
                    counter: 0  
                },
                {
                    id: 12,
                    name: 'December',
                    counter: 0  
                }
            ],
            text: '',
            updateDetails:{
                "state": true,
                "msg": "data_successfully_inserted"
            },
            index: '',
            newMonths: []
                  
        }
    },
    methods: {
        onSuccess(){
            if(this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);
                console.log('success')                          
            }
        },
        async uploadMonthImg(payload, index) {
            let formData = new FormData();
            formData.append(`month${index+1}`, payload);
            console.log(formData)
            // this.$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')          
            this.$axios.setHeader('Content-Type', 'multipart/form-data')          
            const availability = await this.$axios.$put(`dashboard/update_month_images`, formData, {
                onUploadProgress: uploadEvent =>{
                    console.log('Uploaded progress: ' + Math.round(uploadEvent.loaded/uploadEvent.total*100) + '%')
                    this.months[index].counter = Math.round(uploadEvent.loaded/uploadEvent.total*100)
                }
            })
            this.availability = availability
            this.onSuccess()
            console.log(formData)
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }            
        },
        onUpdate(){
            this.uploadMonthImg()
        }            
    },
    components: {
        RowMonths
    },
    created(){
        this.months.forEach(function(element) {
            element["counter"] = 0;
        });
    }
}
</script>

<style>


</style>
