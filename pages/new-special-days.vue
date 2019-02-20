<template>
    <div class="page-main-padding">
        <navbar></navbar>
        <div>
            <b-nav class="nav__style" fill tabs>
                <b-nav-item to="/" class="force-no-active">Days</b-nav-item>
                <b-nav-item to="/new-months">Months</b-nav-item>
                <b-nav-item to="/new-special-days" active>Special dates</b-nav-item>
            </b-nav>        
        </div>
        <div class="container" @click="onDOMClick">
            <div class="row container-top">
                <b-alert show dismissible variant="success" v-show="updateScc" class="alert--fixed error-center">
                    Description Updated Successfully
                </b-alert>
                <b-alert show dismissible variant="danger" v-show="updateErr" class="alert--fixed error-center">
                    Update failed!
                </b-alert>
                <!-- <div class="alert alert-success alert--fixed" v-show="updateScc">Description Updated Successfully</div> -->
                <!-- <div class="alert alert-danger alert--fixed" v-show="updateErr">Update failed</div> -->
                <!-- <SuccessAlert></SuccessAlert> -->
                <div class="col-md-12">
                    <!-- <div class="row pb-4">
                        <div class="col-sm-4">
                            <b-button class="w-100" @click="collapseSi">toggle si-description</b-button>
                        </div>
                        <div class="col-sm-4">
                            <b-button class="w-100" @click="collapseEn">toggle en-description</b-button>
                        </div>
                        <div class="col-sm-4">
                            <b-button class="w-100" @click="collapseTa">toggle ta-description</b-button>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <!-- <th scope="col">#</th> -->
                                    <th scope="col" style="width: 25%" class="text-center"><p>Special Day</p></th>
                                    <th scope="col" style="width: 25%" class="text-center"><p>Image</p></th>
                                    <th scope="col">
                                        <div class="row inline">
                                            <div style="width: 20%" v-show="!showCollapseSi">
                                                <b-button class="text-center icon-minus" @click="collapseSi">
                                                    <div class="row px-3 pb-1 text-center">
                                                        අ
                                                    </div>
                                                    <div class="row px-3 pb-1">
                                                        <i class="fas fa-caret-square-up fa-lg"></i>
                                                    </div>                                            
                                                </b-button>
                                            </div>
                                            <div style="width: 20%" v-show="showCollapseSi">
                                                <b-button class="text-center icon-minus ml-5" @click="collapseSi"><i class="fas fa-caret-square-down fa-lg"></i></b-button>
                                            </div>
                                            <div style="width: 80%" class="text-center">
                                                <b-collapse id="my-collapse-si" v-model="showCollapseSi">
                                                    <p>Sinhala</p> 
                                                </b-collapse>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div class="row inline">
                                            <div style="width: 20%" v-show="!showCollapseEn">
                                                <b-button class="text-center icon-minus" @click="collapseEn">
                                                    <div class="row px-3 pb-1 text-center">
                                                        A
                                                    </div>
                                                    <div class="row px-3 pb-1">
                                                        <i class="fas fa-caret-square-up fa-lg"></i>
                                                    </div>                                                
                                                </b-button>
                                            </div>
                                            <div style="width: 20%" v-show="showCollapseEn">
                                                <b-button class="text-center icon-minus ml-5" @click="collapseEn"><i class="fas fa-caret-square-down fa-lg"></i></b-button>
                                            </div>
                                            <div style="width: 80%" class="text-center">
                                                <b-collapse id="my-collapse-en" v-model="showCollapseEn">
                                                    <p>English</p> 
                                                </b-collapse>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div class="row inline">
                                            <div style="width: 20%" v-show="!showCollapseTa">
                                                <b-button class="text-center icon-minus" @click="collapseTa">
                                                    <div class="row px-3 pb-1 text-center">
                                                        அ
                                                    </div>
                                                    <div class="row px-3 pb-1">
                                                        <i class="fas fa-caret-square-up fa-lg"></i>
                                                    </div>
                                                </b-button>
                                            </div>
                                            <div style="width: 20%" v-show="showCollapseTa">
                                                <b-button class="text-center icon-minus ml-5" @click="collapseTa"><i class="fas fa-caret-square-down fa-lg"></i></b-button>
                                            </div>                                            
                                            <div style="width: 80%" class="text-center">
                                                <b-collapse id="my-collapse-ta" v-model="showCollapseTa">
                                                    <p>Tamil</p> 
                                                </b-collapse>
                                            </div>
                                        </div>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody v-if="infoDates!==null">
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
                                    <RowSpecialDay v-for="(infoDate, index) in infoDates" 
                                                :key="index"
                                                :infoDate.sync ="infoDate"
                                                :file ="file"
                                                @imgDayChange="uploadImageDay($event, index)"
                                                @inputSi="parentTextSi($event, index)"
                                                @inputEn="parentTextEn($event, index)"
                                                @inputTa="parentTextTa($event, index)"
                                    >
                                    </RowSpecialDay>
                                </tbody>
                            </table>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p-3 container-bottom">
                <div class="col-sm-8 offset-sm-2">
                    <div class="row p-2">
                        <div class="col-sm-4 col-lg-2 col-md-3 offset-sm-6 offset-lg-10 offset-md-8">
                            <b-button class="w-100 btn--dark b-r-0" @click="onUpdate(infoDates)">Update</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RowSpecialDay from '../components/RowSpecialDay.vue'

export default {
    // auth: false,
    data() {
        return{
            file: null,
            textSi: '',
            textEn: '',
            textTa: '',
            infoDates: [],          
            updateErr: false,
            updateScc: false,
            showCollapseSi: true,
            showCollapseEn: true,
            showCollapseTa: true,
        }
    },
    methods: {
        onSuccess(){
            if(this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },
        // onUpdate(){
        //     this.specialDays.forEach(element => {
        //         console.log(element);
        //     });
        // },
        async onDatesImages() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const datesImages = await this.$axios.$get(`dashboard/special_dates_and_images`)
            this.infoDates = datesImages.object.special_dates_and_images
            // console.log('onDatesImages')
        },
        async uploadImageDay(payload, index) {
            let formData = new FormData();
            formData.append(`date${index+1}`, payload);
            // console.log(formData)
            // this.$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')          
            this.$axios.setHeader('Content-Type', 'multipart/form-data')          
            const availability = await this.$axios.$put(`dashboard/update_special_dates_images`, formData, {
                onUploadProgress: uploadEvent =>{
                    // console.log('Uploaded progress: ' + Math.round(uploadEvent.loaded/uploadEvent.total*100) + '%')
                    this.infoDates[index].count = Math.round(uploadEvent.loaded/uploadEvent.total*100)
                    // this.$set(this.infoDates[index], counter, Math.round(uploadEvent.loaded/uploadEvent.total*100)))
                    // this.infoDates[index] = Object.assign({}, this.infoDates[index], {
                    //     counter: Math.round(uploadEvent.loaded/uploadEvent.total*100)
                    // })
                }
            })
            this.availability = availability
            this.onSuccess()
            // console.log(formData)
            for (var pair of formData.entries()) {
                // console.log(pair[0]+ ', ' + pair[1]); 
            }             
        },
        async onUpdate(payload) {
            this.$axios.setHeader('Content-Type', 'application/json')          

            var obj = {
                update_descriptions : []
            }
            this.infoDates.map(function(element) {        
                obj.update_descriptions.push({ 
                    'date' : element.id,
                    'description_en' : element.description_en,
                    'description_si' : element.description_si,
                    'description_ta' : element.description_ta
                });
            })
            var object = JSON.parse(JSON.stringify(obj))
            
            
            // console.log(JSON.stringify(obj))
            // console.log('obj')
            // console.log(object)


            // console.log('else_data_successfully_inserted')
            // console.log(object)
            const updateSpecialDaysResponse = await this.$axios.$post(`dashboard/update_descriptions`,object)
            if(updateSpecialDaysResponse.state){
                this.updateScc= true
                // console.log('true')
            }else{
                this.updateErr= true
            }
            // console.log(updateSpecialDaysResponse)      
                       
        },
        parentTextSi(payload, index){
            this.infoDates[index].description_si = payload
        },                 
        parentTextEn(payload, index){
            this.infoDates[index].description_en = payload
        },                 
        parentTextTa(payload, index){
            this.infoDates[index].description_ta = payload
        },
        onDOMClick(){
            this.updateErr = false
            this.updateScc = false            
        },
        collapseSi(){
            console.log('collapseSi')
            this.$root.$emit('bv::toggle::collapse', 'my-collapse-si')
        },                 
        collapseEn(){
            console.log('collapseEn')
            this.$root.$emit('bv::toggle::collapse', 'my-collapse-en')
        },                 
        collapseTa(){
            console.log('collapseTa')
            this.$root.$emit('bv::toggle::collapse', 'my-collapse-ta')
        }                 
    },
    components:{
        RowSpecialDay
    },
    mounted(){
        this.onDatesImages();
        // Split(['#one', '#two']);
    //     this.infoDates.forEach(function(element) {
    //         element["counter"] = 0;
    //     });
    },
    // watch(){
    //     this.uploadImageDay()
    // },
    // beforeUpdate(){
    //     // this.infoDates.forEach(function(element) {
    //     //     element["counter"] = 0;
    //     // });
    //     this.onDatesImages();
    // }    
}
</script>

<style>
.split, .gutter.gutter-horizontal {
    float: left;
}
.gutter.gutter-horizontal {
    cursor: ew-resize;
}

.icon-minus{
    padding: 0px 2px 0px 2px;
}
</style>
