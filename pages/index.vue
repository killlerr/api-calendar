<template>
    <div class="container">
        <navbar></navbar>
        <div class="row year-select">
            <DangerAlert></DangerAlert>
            <WarningAlert></WarningAlert>
            <div class="col-md-4">
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Year Holidays: &nbsp;</label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100" to="/days">Edit</b-button>
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
                        <b-button class="w-100" to="/img-months">Edit</b-button>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md-4">
                        <label>Special-day Image: &nbsp; </label>
                    </div>
                    <div class="col-md-8">
                        <b-button class="w-100" to="/img-special-days">Edit</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

export default {
  auth: false
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
