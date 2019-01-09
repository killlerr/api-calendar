<template>
    <div class="container">
        <navbar></navbar>
        <div class="row year-select">
            <DangerAlert></DangerAlert>
            <WarningAlert></WarningAlert>
            <div class="col-md-4">
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Select Year: &nbsp;</label>
                    </div>
                    <div class="col-md-8">
                        <b-form-select v-model="selected" :options="options" @input="checkYear" class="mb-3" size="sm" />
                        <!-- <p>{{selected}}</p> -->
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-8 offset-md-4">
                        <b-button class="w-100" @click="successAlert" to="/days">Edit</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-8 offset-md-4">
                        <b-button class="w-100" @click="dangerAlert">Delete</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row image-select">
            <div class="col-md-4">
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Monthly Image: &nbsp;</label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100" href="/img-months">Edit</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Special-day Image: &nbsp; </label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100" href="/img-special-days">Edit</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
// import SuccessAlert from '../components/SuccessAlert'
// import DangerAlert from '../components/DangerAlert'

export default {
  auth: false,
    data() {
        return {
            selected: null,
            options: [ 
                {value: + ((new Date().getFullYear())- 2), text: String((new Date().getFullYear())- 2)},
                {value: + ((new Date().getFullYear())- 1), text: String((new Date().getFullYear())- 1)},
                {value: + (new Date().getFullYear()), text: String(new Date().getFullYear())},
                {value: + ((new Date().getFullYear())+ 1), text: String((new Date().getFullYear())+ 1)},
                {value: + ((new Date().getFullYear())+ 2), text: String((new Date().getFullYear())+ 2)}
            ],
            alert: null,
            yearDetails: {
                status: 1 //0 = empty 1 = not-empty
            },
            yearDetails2: {
                status: 1 
            }

        }
    },
    methods: {
        arrYear(){
            for (var n = 0; n <=6; n++){
                this.options[n] =`${JSON.stringify((new Date().getFullYear())- 2 + n)}`
            }
        },
        checkYear(selectedYear){
            this.alert = true;
            this.$nuxt.$emit('ALERT_WARNING', this.alert);
            this.$store.dispatch('selectYear', selectedYear)
        },
        dangerAlert(){
            this.alert = true;
            this.$nuxt.$emit('ALERT_DANGER', this.alert); 
        }
    },
    components: {
        // SuccessAlert,
        // DangerAlert
    },

    beforeMount() {
        this.arrYear();
        console.log('beforeMout hook is called');
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
