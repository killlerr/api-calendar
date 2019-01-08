<template>
    <b-alert variant="success"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
    <h4 class="alert-heading">Well done!</h4>
    <p>
        Aww yeah, you successfully read this important alert message.
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
      showDismissibleAlert: false
    }
  },
  created() {
    // $on method will receive the updated count value from the sender component
    this.$nuxt.$on('ALERT_SUCCESS', data => {
      this.showDismissibleAlert = data;
    });
  },
  beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('ALERT_SUCCESS');
  }
}
</script>