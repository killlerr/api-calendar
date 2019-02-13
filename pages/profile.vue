<template>
    <div class="container" @click="onDOMClick">
        <navbar></navbar>
        <b-alert show variant="success" v-if="newUserState" class="alert--fixed error-center">
                    New User Added
        </b-alert>           
        <div class="row p-5 container-top">
            <div class="col-md-8 offset-md-2">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="user in users" v-bind:key="user.id">
                        <th scope="row">{{user.id}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>
        <div class="row p-3 container-bottom">
            <div class="col-md-4 offset-md-7">
                <div class="row p-2">
                    <div class="col-md-8">
                        <!-- <b-button class="w-100">New User</b-button> -->
                        <b-btn v-b-modal.modal1 class="w-100">New User</b-btn>

                        <!-- Modal Component -->
                        <b-modal id="modal1" title="New User" ref="modal" class="text-dark" ok-title="Submit" ok-only @ok="onOk">
                            <form @submit.stop.prevent="handleSubmit">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8 offset-md-2">
                                            <div class="row py-2">
                                                <b-form-input v-validate="'required'" v-model="newUser.userName"
                                                            type="text"
                                                            placeholder="User name"
                                                            name="name"></b-form-input>
                                                <div class="alert alert-danger w-100" v-show="errors.has('name')">{{ errors.first('name') }}</div>                                        
                                            </div>                                                                             
                                            <div class="row py-2">
                                                <b-form-input v-validate="'required|email'" v-model="newUser.email"
                                                            type="email"
                                                            placeholder="Email"
                                                            name="email"></b-form-input>
                                                <div class="alert alert-danger w-100" v-show="errors.has('email')">{{ errors.first('email') }}</div>                                        
                                            </div>                                                                                                                                                                                             
                                            <div class="row py-2">
                                                <b-form-input v-validate="'required|min:6'" v-model="newUser.password"
                                                            ref="password"
                                                            type="password"
                                                            placeholder="Password"
                                                            name="password"></b-form-input>
                                                <div class="alert alert-danger w-100" v-show="errors.has('password')">{{ errors.first('password') }}</div>                                        
                                            </div>                                                                             
                                            <div class="row py-2">
                                                <b-form-input v-validate="'required|confirmed:password'" v-model="newUser.confirmPassword"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                            name="confirmPassword"></b-form-input>
                                                <div class="alert alert-danger w-100" v-show="errors.has('confirmPassword')">{{ errors.first('confirmPassword') }}</div>                                                                                                                  
                                            </div>                                                                             
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // auth: false,
    data(){
        return{
            users: [],
            newUser:{},
            newUserState: false
        }
    },
    methods:{
        async onOk(evt){
            this.$axios.setHeader('Content-Type', 'application/json')    
            const newUserResponse = await this.$axios.post('auth/register', {
                name : this.newUser.userName,
                email : this.newUser.email,
                password : this.newUser.password,
                confirm_password : this.newUser.confirmPassword
            })
            if(newUserResponse.data.result === "user_registration_is_successful"){
                    this.newUserState = true
                    this.fetchData()
                    this.handleSubmit()
            }
            console.log(newUserResponse.data.result)      
            evt.preventDefault()
            this.$validator.validateAll().then((evt) => {
                console.log('validation success')
                console.log(evt)
                if(!this.errors.items.length){
                    // this.handleSubmit()
                }
            },() =>{
                console.log('validation failed')
            })
        },
        handleSubmit () {
            this.clearName()
            this.$refs.modal.hide()
        },
        clearName() {
            this.newUser= {}
            this.errors.items = []
        },
        onDOMClick(){
            this.newUserState = false
        },
        async fetchData() {
            this.$axios.setHeader('Content-Type', 'application/json')          
            const users = await this.$axios.$get(`auth/users`)
            this.users = users.users
        },        
    },
    beforeMount(){
        this.fetchData()
    }
}
</script>
