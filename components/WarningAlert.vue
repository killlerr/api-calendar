<template>
    <b-alert variant="warning"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
    <h4 class="alert-heading">Overwrite Alert!</h4>
    <hr>
    <p class="mb-0">Selected year already contain data.Updating data will overwrite the database.</p>
    </b-alert>
</template>

<script>
export default {
    auth: false,
  data () {
    return {
      showDismissibleAlert: false,
      year: ''
    }
  },
  created() {
    // $on method will receive the updated count value from the sender component
    this.$nuxt.$on('ALERT_WARNING', data => {
      this.showDismissibleAlert = data;
    });
  },
  beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('ALERT_WARNING');
  }
}
</script>