<template>
    <tr>
        <th scope="row">{{childData.id}}</th>
        <td>{{childData.name}}</td>
        <!-- <td>
            <div>
                <img :src="childData.image_url" alt="">
            </div>
        </td> -->
        <td>
            <div>
                <div class="file-upload-form">
                    <b-form-file type="file" id="file" ref="fileDay" @change="onFileChange" :state="Boolean(true)" placeholder="Choose a file..."></b-form-file>
                    <b-progress :value="childData.count" variant="info" show-progress class="mt-1"></b-progress>                    
                </div>
            </div>
        </td>
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea1"
                                v-model="childData.description_si"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6"
                                @input="$emit('inputSi', $event)"
                                >
                </b-form-textarea>
            </div>
        </td>
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea2"
                                v-model="childData.description_en"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6"
                                @input="$emit('inputEn', $event)">
                </b-form-textarea>
            </div>
        </td>
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea3"
                                v-model="childData.description_ta"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6"
                                @input="$emit('inputTa', $event)">
                </b-form-textarea>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    auth: false,
    data(){
        return{
            fileImg: '',
            counter: 0,
            childData: ''
        }
    },
    beforeMount() {
        if(this.infoDate) {
            this.childData= this.infoDate
        }
    },
    props: ['infoDate', 'file'],
    methods:{
        onFileChange(){
            console.log(this.$refs)
            this.fileImg = this.$refs.fileDay.$refs.input.files[0]
            this.$emit('imgDayChange', this.fileImg)
            console.log(this.fileImg)
        },
        // handleChange(){
        //     this.$emit('infoDate', this.infoDate)
        // }
    },
    // watch: {
    //     infoDate(newValue) {
    //         console.log(newValue)
    //         this.counter = newValue.counter
    //     }
    // }
}
</script>
