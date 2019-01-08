<template>
    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
    <h4 class="alert-heading">Overwrite Alert!</h4>
    <p>
        You successfully overwrite the databse.Set dates to the year: {{year}}
        This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
    </p>
    <hr>
    <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
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