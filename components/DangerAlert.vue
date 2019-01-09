<template>
    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
    <h4 class="alert-heading">Database deleted!</h4>
    <hr>
    <p class="mb-0">Deleted all data for the selected year.</p>
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
    this.$nuxt.$on('ALERT_DANGER', data => {
      this.showDismissibleAlert = data;
    });
  },
  beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('ALERT_DANGER');
  }
}
</script>