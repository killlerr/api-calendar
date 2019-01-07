<template>
    <div class="container">
        <navbar></navbar>
        <div class="row year-select">
            <div class="col-md-4">
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Select Year: &nbsp</label>
                    </div>
                    <div class="col-md-8">
                        <b-form-select v-bind="selected" :options="options" class="mb-3" />
                        <!-- <b-button @click="arrYear"></b-button>
                        <p v-for="year in years" v-bind:key="year.value"></p> -->
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-8 offset-md-4">
                        <b-button class="w-100">Update</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-8 offset-md-4">
                        <b-button class="w-100">Delete</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row image-select">
            <div class="col-md-4">
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Monthly Image: &nbsp</label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100">Update</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Special-day Image: &nbsp</label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100">Update</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
// import Navbar from '~/components/Navbar.vue'

export default {
  auth: false,
    data() {
        return {
            selected: null,
            options: [ 
                {value: 2018, text: '2018'},
                {value: 2019, text: '2019'},
                {value: 2020, text: '2020'},
            ],
            years: [],

        }
    },
    components:{
        // Navbar
    },
    computed: {
        // arrYear(){
        //         var today = new Date().getFullYear();
        //         // var years = [];
        //         this.years[0] = today - 1;
        //         this.years[1] = today;
        //         this.years[2] = today + 1;
        //         // var options = new Array();
        //         // for (var i = 0; i < theArray.length; i++){
        //         //    options[i] =`value: ${this.years[i]}, text: ${this.years[i]}`
        //         // }                    
                
        //         return years;
        //         // console.log(years[0],years[1],years[2])
        // }
    }
}
</script>

<style>

.year-select{
  display: flex;
  justify-content: center;
  align-items: center;
  background: silver;
  height: 52vh;
}

.image-select{
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--ada-dawasa-grey);
  height: 40vh;
  color: silver
}

</style>
