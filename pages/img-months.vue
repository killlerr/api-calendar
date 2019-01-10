<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <SuccessAlert></SuccessAlert>
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
                        <tr  v-for="month in months" v-bind:key="month.id">
                        <th scope="row">{{month.id}}</th>
                        <td>{{month.name}}</td>
                        <td>
                            <div>
                                <div class="file-upload-form">
                                    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                                </div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-sm-4 offset-sm-7">
                <div class="row p-2">
                    <div class="col-sm-8">
                        <b-button class="w-100" @click="successAlert">Update</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    data() {
        return{
            file: null,
            months: [
                {
                    id: 1,
                    name: 'January'   
                },
                {
                    id: 2,
                    name: 'February'   
                },
                {
                    id: 3,
                    name: 'March'   
                },
                {
                    id: 4,
                    name: 'April'   
                },
                {
                    id: 5,
                    name: 'May'   
                },
                {
                    id: 6,
                    name: 'June'   
                },
                {
                    id: 7,
                    name: 'July'   
                },
                {
                    id: 8,
                    name: 'August'   
                },
                {
                    id: 9,
                    name: 'September'   
                },
                {
                    id: 10,
                    name: 'October'   
                },
                {
                    id: 11,
                    name: 'November'   
                },
                {
                    id: 12,
                    name: 'December'   
                }
            ],
            text: '',
            updateDetails:{
                "state": true,
                "msg": "data_successfully_inserted"
            }       
        }
    },
    methods: {
        successAlert(){
            if(this.updateDetails.msg === 'data_successfully_inserted'){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },    
    }
}
</script>

<style>


</style>
