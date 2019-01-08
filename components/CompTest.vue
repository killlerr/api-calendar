<template>
  <div>
    <span>Number of Click: {{ numberOfClicks }}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      numberOfClicks: 0
    }
  },
  created() {
    // $on method will receive the updated count value from the sender component
    this.$nuxt.$on('INC_COUNT', data => {
      this.numberOfClicks = data;
    });
  },
  beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('INC_COUNT');
  },
}  
</script>