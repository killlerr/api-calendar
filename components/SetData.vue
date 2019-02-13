<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row p-3">
                    <h3>Set start year and end year on database<b-badge>Overwrite databse</b-badge></h3>
                    <div class="col-md-6 d-flex">
                        <label>Start Year: &nbsp;</label>
                        <b-form-select v-bind="selected" :options="options" class="mb-3" />
                    </div>
                    <div class="col-md-6 d-flex">
                        <label>End Year: &nbsp;</label>
                        <b-form-select v-bind="selected" :options="options" class="mb-3" />                    </div>
                </div>
                <div class="row p-3">
                    <h3>Set special dates<b-badge>Overwrite databse</b-badge></h3>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Special date name</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Poya</td>
                            <td><datepicker v-bind="state.date" name="start-date" @selected="dtpSelected"></datepicker></td>                          
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- table set special date image -->
                <!-- <div class="row p-3">
                    <h3>Set special date image<b-badge>Overwrite databse</b-badge></h3>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Special date name</th>
                            <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>New year</td>
                            <td>
                                <div>
                                    <div class="file-upload-form">
                                        Upload an image file:
                                        <input type="file" accept="image/*">
                                    </div>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div> -->
                <!-- Tbale set monthly image -->
                <div class="row p-3">
                    <h3>Set monthly image<b-badge>Overwrite databse</b-badge></h3>
                    <table class="table">
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
                                        Upload an image file:
                                        <input type="file" accept="image/*">
                                    </div>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>       
    </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker';

export default {
    data: function() {
        return{
            test: 2019,
            state: {
                date: new Date(2019, 1, 4),
            },
            imageData: "",
            months: [
            {
                id: 1,
                name: 'test 1'   
            },
            {
                id: 2,
                name: 'test 2'   
            },
            {
                id: 3,
                name: 'test 2'   
            },
            {
                id: 4,
                name: 'test 2'   
            },
            {
                id: 5,
                name: 'test 2'   
            },
            {
                id: 12,
                name: 'test 3'   
            }],
            selected: null,
            options: [ 
                {value: 2018, text: '2018'},
                {value: 2019, text: '2019'},
                {value: 2020, text: '2020'},
            ]            
        }

    },
    components: {
        Datepicker
    },
    methods: {
        dtpSelected() {
            console.log(this.state.date);
        },

    }
}
</script>

<style>

/* .file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
} */

</style>

