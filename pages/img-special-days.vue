<template>
    <div class="container">
        <navbar></navbar>
        <div class="row p-5 container-top">
            <div class="col-md-8 offset-md-2">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Special Day</th>
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
        <div class="row p-3 container-bottom">
            <div class="col-md-4 offset-md-7">
                <div class="row p-2">
                    <div class="col-md-8">
                        <b-button class="w-100">Update</b-button>
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
            imageData: "",
            months: [
            {
                id: 1,
                name: 'test 1'   
            },
            {
                id: 2,
                name: 'test 2'   
            }],
        }
    }
}
</script>

<style>



</style>
