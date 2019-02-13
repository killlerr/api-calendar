<template>
    <div class="container" @click="onDOMClick">
        <div class="alert alert-danger alert--fixed" v-show="loginErr">Login Failed</div>
        <div class="b-form--center">
            <div class="">
                    <div class="p-5">
                        <b-img src="/app-icon.png" fluid alt="icon" class="app-icon-wrap--login"/>
                    </div>
            </div>
            <div class="p-5">
                <b-form inline>
                    <label class="sr-only" for="inlineFormInputName2">Email</label>
                    <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Email" type="email" v-model="form.user"/>
                    
                    <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
                    <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input id="inlineFormInputGroupUsername2" placeholder="Password" type="password" v-model="form.password" />
                    </b-input-group>

                    <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->
                    <b-button variant="primary" @click="onClick">Login</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                user: '',
                password: '',
                checked: []
            },
            loginErr: false
        }
    },
    methods: {
        async onClick () {
            console.log(this.form.user)
            console.log(this.form.password)
            try{ 
                await this.$auth.loginWith('local',{
                data:{
                      email: this.form.user, //'1234@gmail.com',
                    // email: '1234@gmail.com',
                      password: this.form.password //'123456'
                    // password: '123456'
                }}).then(() => {
                     this.$router.push("/")
                })
            }catch(err){
                this.loginErr = true
                console.log('err')
                console.log(err)
            }
        },
        onDOMClick(){
            this.loginErr = false
        }
    }
}

</script>

<style>

.b-form--center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: silver;
  width: 100%;
  height: 100vh;
}

.app-icon-wrap--login{
    width: 20rem;
}
</style>
