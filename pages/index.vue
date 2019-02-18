<template>
    <div>
        <navbar></navbar>
        <div>
            <b-nav class="nav__style" fill tabs>
                <b-nav-item to="/" active>Days</b-nav-item>
                <b-nav-item to="/new-months">Months</b-nav-item>
                <b-nav-item to="/new-special-days">Special dates</b-nav-item>
            </b-nav>        
        </div>
        <div class="container">   
            <div class="row container-top">
                <SuccessAlert></SuccessAlert>
                <DangerAlert></DangerAlert>
                <!-- <WarningAlert></WarningAlert> -->
                <b-alert class="alert--fixed" dismissible show variant="danger" v-if="rowErrors.length">
                    <span class="duplicate-feedback pl-3 display-true">
                        <p v-if="rowErrors.length" class="pmb-0">
                            <ul class="p-0 pmb-0">
                            <li v-for="(error, index) in rowErrors" :key="index" class="error-center">{{ error }}</li>
                            </ul>
                            <!-- {{duplicate}} -->
                        </p> 
                    </span>       
                </b-alert>     
                <b-alert show variant="success" dismissible v-if="updateSpecialDaysResponse.result" class="alert--fixed error-center">
                            Updated Successfully
                </b-alert>     
                <b-alert show variant="danger" dismissible v-if="!deleteSpecialDaysResponse" class="alert--fixed error-center" @dismissed="resetData">
                            Database is empty
                </b-alert>     
                <div class="col-md-12">
                    <div class="pb-4">
                        <b-card bg-variant="dark" text-variant="white" class="b-r-0">
                            <div class="row">
                                <div class="col-md-7 offset-md-2 pb-4">
                                    <div class="row">
                                        <div class="col-md-6 offset-md-3">
                                            <p class="lead text-center">Selected Year:</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-10 offset-md-1">
                                            <b-form-select :options="options" v-model="selectedYear" @input="setYear" class="form-control form-select--text " :select-size="2"></b-form-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </div>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                            <!-- <th scope="col">#</th> -->
                            <th scope="col">Special Day</th>
                            <th scope="col">Date*</th>
                            <th scope="col">Visibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <keep-alive> -->
                                <RowDays  v-for="(filledSpecialDay, index) in filledSpecialDays" v-bind:key="index"
                                        :date="filledSpecialDay"
                                        :selectedYear="selectedYear"
                                        ref="rowDay"
                                        @select="noErrors"
                                        ></RowDays>
                                                                            <!-- @select="parentData" -->
                            <!-- </keep-alive> -->
                        </tbody>
                    </table> 
                </div>
            </div>
            <div class="row p-3 container-bottom">
                <div class="col-sm-8 offset-sm-2">
                    <div class="row p-2">
                        <div class="col-sm-4 col-lg-2 col-md-3 offset-sm-4 offset-lg-8 offset-md-6">
                            <b-button class="w-100 btn--dark b-r-0" @click="onDelete">Delete</b-button>
                        </div>
                        <div class="col-sm-4 col-lg-2 col-md-3">
                            <b-button class="w-100 btn--dark b-r-0" @click="onUpdate(filledSpecialDays)">Update</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import RowDays from '../components/RowDays.vue'
import { mapActions, mapState } from 'vuex'
// import org.json.JSONArray;

export default {
    // auth: false,
    data() {
        return{
            options: [2000],
            selectedYear: null,
            status: 'true',
            filledSpecialDays: null,
            availability: null,
            updatedResponse: null,
            onlyDates: null,
            updatedSpecialDays: null,
            test: null,
            obj: {
                update_special_dates: [],
            },
            object: {},
            duplicate: false,
            rowErrors:[],
            updateSpecialDaysResponse:{
                result: false
            },
            deleteSpecialDaysResponse: true

        }
    },
    components: {
        flatPickr,
        RowDays
    },
    computed:{
        ...mapState(['specialDays']),
    },
    methods: {
        ...mapActions([
            'fetchSpecialDays' 
        ]),
        dtpSelected(){
            console.log('date selected')
        },
        setYear(){
            this.change();
            this.dataAvailability();

        },
        arrYear(){
            for (var n = 0; n <=50; n++){
                this.options[n] =`${JSON.stringify((new Date().getFullYear())- 10 + n)}`
            }
        },
        warningAlert(){
            if(!this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_WARNING', this.alert);                          
            }            
        },
        dangerAlert(){
            if(!this.availability.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_DANGER', this.alert);                          
            }            
        },
        successAlert(){
            if(this.updatedResponse.state){
                this.alert = true;
                this.$nuxt.$emit('ALERT_SUCCESS', this.alert);                          
            }
        },
        // onUpdate(){
        //     console.log(this.filledSpecialDays)
        // },
        async change() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const specialDays = await this.$axios.$get(`dashboard/special_dates/${this.selectedYear}`)
            this.filledSpecialDays = specialDays.object.special_dates
            this.$store.dispatch('fetchSpecialDays', specialDays.object.special_dates)
        },
        async dataAvailability() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const availability = await this.$axios.$get(`dashboard/check_data_available/${this.selectedYear}`)
            this.availability = availability
            this.warningAlert();
        },
        async onUpdate(payload) {
            // this.$nuxt.$emit('onUpdate')
            // this.bus.$emit('onUpdate')
            console.log('this.$refs.rowDay.checkForm')
            console.log(this.$refs.rowDay[0].checkForm())
            for(var i=0; i<25; i++){
             this.$refs.rowDay[i].checkForm()
            }
            console.log(this.$refs.rowDay)
            console.log('beforeIF')
            // hub.$emit('onUpdate')
            // this.dateDuplications()
            // if(this.filledSpecialDays.every(this.dateIsNotNull) && this.dateDuplications()){
            if(this.filledSpecialDays.every(this.dateIsNotNull) && this.dateDuplications()){
                this.$axios.setHeader('Content-Type', 'application/json')          
                const availabilityToUpdate = await this.$axios.$get(`dashboard/check_data_available/${this.selectedYear}`)
                console.log(availabilityToUpdate.msg);
                var obj = {
                    update_special_dates : []
                }
                this.filledSpecialDays.map(function(element) {        
                    obj.update_special_dates.push({ 
                        'id' : element.id,
                        'date' : element.date,
                        'is_main' : element.is_main
                    });
                })
                var object = JSON.parse(JSON.stringify(obj))

                if(availabilityToUpdate.state){
                    const updateDateResponse = await this.$axios.$get(`dashboard/update_data/${this.selectedYear}`)
                    console.log(updateDateResponse.msg)
                    if(updateDateResponse.msg === 'data_successfully_inserted'){
                        console.log('if_data_successfully_inserted')
                        // console.log(object)
                        const updateSpecialDaysResponse = await this.$axios.$post(`dashboard/update_special_dates`,object)
                        console.log(updateSpecialDaysResponse.result)
                        console.log(updateSpecialDaysResponse.msg)
                        // this.successAlert()
                        // this.change();
                    }
                }
                else{
                        console.log('else_data_successfully_inserted')
                        // console.log(object)
                        const updateSpecialDaysResponse = await this.$axios.$post(`dashboard/update_special_dates`,object)
                        this.updateSpecialDaysResponse.result = updateSpecialDaysResponse.result
                        console.log('updateSpecialDaysResponse.result')      
                        console.log(updateSpecialDaysResponse.result)      
                        console.log('updateSpecialDaysResponse.msg')
                        console.log(updateSpecialDaysResponse.msg)
                        this.change();      
                }            
            }
        },
        async onDelete(){
            this.$axios.setHeader('Content-Type', 'application/json')          
            const delRes = await this.$axios.$get(`dashboard/delete_data/${this.selectedYear}`)
            console.log(delRes.state)
            console.log(delRes.msg)
            this.deleteSpecialDaysResponse = delRes.state
            if(delRes.state){
                this.dangerAlert()
                this.change();
            }
        },
        dateIsNotNull(current){
           return current.date !== ""
        },
        dateDuplications(){
            var array = this.filledSpecialDays;
            this.duplicate = false;

            for (var i = 0; i < array.length; i++) {

                // var special_date_id = this.filledSpecialDays[i]["id"];
                var date = this.filledSpecialDays[i].date;
                var is_main = this.filledSpecialDays[i].is_main;
                // var year = this.filledSpecialDays[i]["date"].slice(0, 4);

                for (var j = i + 1; j < array.length; j++) {

                    var sec_date = this.filledSpecialDays[j].date;
                    var sec_is_main = this.filledSpecialDays[j].is_main;

                    if (date === sec_date) {
                        console.log('date === sec_date')
                        if (is_main === true && sec_is_main === true) {
                            console.log('is_main === true && sec_is_main === true')
                            this.duplicate = true;
                            this.rowErrors.push("Date Duplication! Only one date must be set as visible")
                            // break;
                            return false
                        }
                        else if (is_main === false && sec_is_main === false) {
                            console.log('is_main === false && sec_is_main === false')
                            this.duplicate = true;
                            this.rowErrors.push("One date must be set as visible")
                            // break;
                            return false
                        }
                        else if (is_main === sec_is_main) {
                                 console.log('is_main ===  sec_is_main ')
                                this.duplicate = true;
                                this.rowErrors.push("Sorry! 3 equal dates are not eligible to input in the current database structure")
                                return false
                        }
                        
                    }
                }
                if(this.duplicate == true) {
                    // break;
                    this.rowErrors.push("Date Duplication! Only one date must be set as visible")                    
                    console.log('this.duplicate == true')
                    return false
                }
            }
            if(this.duplicate == false){
                console.log('this.duplicate == false')
                this.rowErrors=[];
                return true
            }
        },
        noErrors(){
            this.rowErrors= []
            this.updateSpecialDaysResponse.result=false;
            
        },
        resetData(){
            this.deleteSpecialDaysResponse= true
            this.updateSpecialDaysResponse.result= false
        }
    },
    beforeMount(){
        this.arrYear()
    },
    mounted() {
        this.selectedYear = (new Date()).getFullYear()
        
    }

}

//on fist load data set is not loaded to preview
//on Year switch newly loaded rows doesnt load data
</script>

<style>

.form-select--text{
    text-align: center;
    font-size: 1.2em;
    color: white;
    background-color: #2c3034;
    border-radius: 0;
}

.form-select--text option{
    padding: 0.5em;
    cursor: pointer;
    background-color: #2c3034;
    font-size: large;
}


</style>