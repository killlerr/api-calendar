<template>
    <b-alert variant="success"
             :show="showDismissibleAlert"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged"
             class="error-center">
    <p class="mb-0">You successfully updated the databse.</p>
    This alert will dismiss after {{dismissCountDown}} seconds...
    </b-alert>
</template>

<script>
export default {
    auth: false,
  data () {
    return {
      showDismissibleAlert: false,
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
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

<style>
.error-center{
    text-align: center;
    list-style-type: none;
}
</style>
