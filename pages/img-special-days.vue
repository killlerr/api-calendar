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
                        <th scope="col">Description Sinhala</th>
                        <th scope="col">Description English</th>
                        <th scope="col">Description Tamil</th>
                        </tr>
                    </thead>
                    <tbody v-if="datesImages!==null">
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
                        <RowSpecialDay v-for="special_dates_and_image in datesImages.special_dates_and_images" 
                                    v-bind:key="special_dates_and_image.id"
                                    :id="special_dates_and_image.id"
                                    :name="special_dates_and_image.name"
                                    :file="special_dates_and_image.image_url"
                                    :textSi="special_dates_and_image.description_si"
                                    :textEn="special_dates_and_image.description_en"
                                    :textTa="special_dates_and_image.description_ta"
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
            file: null,
            textSi: '',
            textEn: '',
            textTa: '',
            datesImages: null          
        }
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
                console.log(element);
            });
        },
        async onDatesImages() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const datesImages = await this.$axios.$get(`dashboard/special_dates_and_images`)
            this.datesImages = datesImages
        },                 
    },
    components:{
        RowSpecialDay
    },
    mounted(){
        this.onDatesImages();
    }
}
</script>

<style>



</style>
