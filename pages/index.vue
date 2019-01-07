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
</div>

</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  auth: false,
    data() {
        return {
            selected: null,
            options: [ 
                {value: 2018, text: '2018'},
                {value: 2019, text: '2019'},
                {value: 2020, text: '2020'},
            ]            
        }
    },
    components:{
        Navbar
    }
}
</script>

<style>

.year-select{
  display: flex;
  justify-content: center;
  align-items: center;
  background: silver;
  width: 100%;
  height: 55vh;
}

.image-select{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #464545;
  width: 100%;
  height: 40vh;
  color: silver
}

</style>
