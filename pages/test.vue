<template>
  <div>
      <div class="container">
          <CompTest></CompTest>
      </div>
    <div>{{ count }}</div>
    <button @click="increment">Increment Count</button>
  </div>
</template>

<script>
import CompTest from '../components/CompTest'

export default {
    auth: false,
  data() {
    return {
      count: 0
    }
  },
  methods: {
   increment() {
    this.count++;
    
    // $emit method will propagate count value to receiver components
    this.$nuxt.$emit('INC_COUNT', this.count); 
   }
},
components: {
    CompTest
}
}  
</script>