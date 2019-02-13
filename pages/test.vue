<template>
    <div>
        <p>test</p>
        <button @click="onAuth" autofocus>auth</button>
    </div>
</template>

<script>
export default {
    methods:{
        async onAuth(){
            const response = await this.$axios.get('auth/protected')
            console.log(response.data)
        }
    }
}
</script>
