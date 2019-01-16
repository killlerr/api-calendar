<template>
    <tr>
        <th scope="row">{{id}}</th>
        <td>{{name}}</td>
        <td><flat-pickr v-model="date" class="form-control" :config="config" placeholder="Select date"></flat-pickr></td>
        <td> <b-form-checkbox
                        v-model="status"
                        value="true"
                        unchecked-value="false">
                        </b-form-checkbox></td>                                  
    </tr>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    props:['id', 'name', 'date', 'status'],
    data(){
        return{
            currentDate: new Date(),
            config:{
                // minDate: "today",
                // maxDate: new Date().fp_incr(-1), // 14 days from now
                dateFormat: "Y-m-d",
            }
        }
    },
    components: {
        flatPickr,
    }
}
</script>
