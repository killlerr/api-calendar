<template>
    <div class="page-main-padding">
        <navbar></navbar>
        <div>
            <b-nav class="nav__style" fill tabs>
                <b-nav-item to="/" class="force-no-active">Days</b-nav-item>
                <b-nav-item to="/new-months">Months</b-nav-item>
                <b-nav-item to="/new-special-days">Special dates</b-nav-item>
            </b-nav>        
        </div>
        <div class="container" @click="onDOMClick">
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
                <div class="col-sm-8 offset-sm-2">
                    <div class="row p-2">
                        <div class="col-sm-4 col-lg-2 col-md-3 offset-sm-6 offset-lg-10 offset-md-8">
                            <!-- <b-button class="w-100">New User</b-button> -->
                            <b-btn v-b-modal.modal1 class="w-100 btn--dark b-r-0">New User</b-btn>

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
                                                                name="name"
                                                                class=""></b-form-input>
                                                    <div class="alert alert-danger w-100" v-show="errors.has('name')">{{ errors.first('name') }}</div>                                        
                                                </div>                                                                             
                                                <div class="row py-2">
                                                    <b-form-input v-validate="'required|email'" v-model="newUser.email"
                                                                type="email"
                                                                placeholder="Email"
                                                                name="email"
                                                                @input="alreadyExisitsReset"
                                                                class=""></b-form-input>
                                                    <div class="alert alert-danger w-100" v-show="errors.has('email')">{{ errors.first('email') }}</div>
                                                    <b-alert show variant="danger" v-if="alreadyExisits" class="w-100">
                                                                Email already exists
                                                    </b-alert>                                         
                                                </div>                                                                                                                                                                                             
                                                <div class="row py-2">
                                                    <b-form-input v-validate="'required|min:6'" v-model="newUser.password"
                                                                ref="password"
                                                                type="password"
                                                                placeholder="Password"
                                                                name="password"
                                                                class=""></b-form-input>
                                                    <div class="alert alert-danger w-100" v-show="errors.has('password')">{{ errors.first('password') }}</div>                                        
                                                </div>                                                                             
                                                <div class="row py-2">
                                                    <b-form-input v-validate="'required|confirmed:password'" v-model="newUser.confirmPassword"
                                                                type="password"
                                                                placeholder="Confirm Password"
                                                                name="confirmPassword"
                                                                class=""></b-form-input>
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
    </div>
</template>

<script>
export default {
    // auth: false,
    data(){
        return{
            users: [],
            newUser:{},
            newUserState: false,
            alreadyExisits: false
        }
    },
    methods:{
        async onOk(evt){
            evt.preventDefault()
            this.$validator.validateAll().then((evt) => {
                console.log('validation success')
                console.log(evt)
                if(!this.errors.items.length){
                    this.addNewUser()
                }
            })
        },
        async addNewUser(){
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
            console.log(newUserResponse.data.msg)
            this.alreadyExisits = newUserResponse.data.msg   
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
        alreadyExisitsReset(){
            this.alreadyExisits = false
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

<style>

#modal1 .modal-header, #modal1 .modal-body, #modal1 .modal-footer, #modal1 .modal-content {
    background-color: #2c3034;
    color: #fff;
    border: 0;
    border-radius: 0
}
#modal1 .modal-header h5{
    /* margin: auto;
    vertical-align: middle; */
    position: absolute;
    left: 40%;
}
</style>
