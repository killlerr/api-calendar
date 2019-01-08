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
                        <b-form-select v-bind="selected" :options="options" class="mb-3" size="sm" />
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
                        <b-button class="w-100" href="/img-months">Update</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Special-day Image: &nbsp </label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100" href="/img-special-days">Update</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

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
            years: []

        }
    },
    methods: {
            arrYear(){
                for (var n = 0; n <=6; n++){
                   this.options[n] =`${JSON.stringify((new Date().getFullYear())- 2 + n)}`
                }
        }
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
