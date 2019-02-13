<template>
    <!-- <keep-alive> -->
    <tr>
        <!-- <th scope="row">{{date.id}}</th> -->
        <td>{{date.name}}</td>
        <td><flat-pickr v-model="dateDP.date" class="form-control" :config="config" placeholder="Select date"  @on-close="onClose" @on-change="handleChange" required
        ></flat-pickr>
        <div class="invalid-feedback display-true" @onUpdate="checkForm ">
            <div v-show="rowErrors.length" class="pmb-0 alert alert-danger">
                <!-- <ul class="p-0 pmb-0"> -->
                <p class="p-0 pmb-0" v-for="(error, index) in rowErrors" :key="index">{{ error }}</p>
                <!-- </ul> -->
            </div> 
        </div>
        </td>
        <td><b-form-checkbox
                        v-model="dateDP.is_main"
                        @change="handleChange">
                        </b-form-checkbox></td>
        <!-- <td><b-button @click="checkForm"></b-button></td>                                   -->
    </tr>
<!-- </keep-alive> -->
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    props:[ 'date', 'selectedYear'  ],
    data(){
        return{
            dateDP: new Date(),
            config:{
                minDate: "today",
                maxDate: new Date().fp_incr(-1), // 14 days from now
                dateFormat: "Y-m-d",
            },
            rowErrors:[]
        }
    },
    // computed: {
    //     // newDate() {
    //     //     return this.date.time ? this.date.time : new Date();
    //     // }
    // },
    beforeCreate(){
        // console.log('beforeCreate')
    },
    created(){
        // hub.$on('onUpdate',this.checkForm)
        // console.log('Created')
    },
    beforeMount(){
        // console.log('beforeMount')
    },
    mounted() {
        // console.log('Mounted')
        this.dateDP = this.date;       
    },
    beforeUpdate () {
        // console.log('beforeUpdate')
        this.dateDP = this.date // save props data to itself's data and deal with it
        this.config.maxDate = this.selectedYear + '-12-31';
        this.config.minDate = this.selectedYear + '-01-01';
    },
    updated() {
        // console.log('Updated')
    },
    beforeDestroy() {
        // console.log('beforeDestroy')

    },
    destroyed() {
        // console.log('destroyed')
    },    
    methods: {
        handleChange() {
            // this.checkForm();
            // console.log(this.rowErrors)
            console.log('change')
            this.$emit('select', {
                id: this.dateDP.id,
                day: this.dateDP.date,
                visibility: this.dateDP.is_main
            
            })
            
        },
        checkForm(){
            console.log('checkForm')
            if(!this.dateDP.date){     
                console.log('no date')
                this.rowErrors.push("Date required.");
            }
            if (!this.rowErrors.length) {
                console.log('no length')
                return true;
            }
        },
        onClose(){
            console.log('onCLose')
            console.log(this.rowErrors)
            this.rowErrors = []
            console.log(this.rowErrors)
        }
    },
    components: {
        flatPickr,
    },

}
</script>

<style>
.display-true{
    display: block
}

.pmb-0{
    margin-bottom: 0 !important
}
</style>
