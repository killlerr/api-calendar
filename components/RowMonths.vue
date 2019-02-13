<template>
    <tr>
        <!-- <th scope="row">{{month.id}}</th> -->
        <td>{{month.name}}</td>
        <td>
            <div>
                <div class="file-upload-form">
                    <b-form-file type="file" id="file" ref="fileMonth" :state="Boolean(true)" placeholder="Choose a file..." @change="onChange"></b-form-file>
                    <b-progress :value="month.counter" :max="max" variant="info" show-progress class="mt-1"></b-progress>                    
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    data(){
        return{
            fileImg:'',
            max: 100
        }
    },
    props: ['month' , 'file'],
    beforeMount(){
        // this.uploadedFile = this.file
        // this.file = this.uploadedFile
    },
    methods:{
        onChange(){
            console.log(this.$refs)
            this.fileImg = this.$refs.fileMonth.$refs.input.files[0]
            console.log(this.fileImg)            
            this.$emit('imgMonthchange', this.fileImg)
        }
    }
}
</script>

