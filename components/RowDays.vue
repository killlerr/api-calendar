<template>
    <tr>
        <th scope="row">{{date.id}}</th>
        <td>{{date.name}}</td>
        <td><flat-pickr v-model="dateDP.date" class="form-control" :config="config" placeholder="Select date"  @on-change="handleChange"
        ></flat-pickr></td>
        <td> <b-form-checkbox
                        v-model="dateDP.is_main"
                        @change="handleChange">
                        </b-form-checkbox></td>                                  
    </tr>
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
            }
        }
    },
    // computed: {
    //     // newDate() {
    //     //     return this.date.time ? this.date.time : new Date();
    //     // }
    // },
    beforeMount() {
        this.dateDP = this.date
    },
    beforeUpdate () {
        // this.dateDP = this.date // save props data to itself's data and deal with it
        this.config.maxDate = this.selectedYear + '-12-31';
        this.config.minDate = this.selectedYear + '-01-01';
    },    
    methods: {
        handleChange() {
            this.$emit('select', {
                id: this.dateDP.id,
                day: this.dateDP.date,
                visibility: this.dateDP.is_main
                
            })
        },
    },
    components: {
        flatPickr,
    },

}
</script>
