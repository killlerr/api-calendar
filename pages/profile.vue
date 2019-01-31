<template>
    <div class="container" @click="onDOMClick">
        <navbar></navbar>
        <b-alert show variant="success" v-if="newUserState" class="error-center">
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
                        <b-modal id="modal1" title="New User" class="text-dark" ok-title="Submit" ok-only @ok="onOk">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8 offset-md-2">
                                        <div class="row py-2">
                                            <b-form-input v-model="newUser.userName"
                                                        type="text"
                                                        placeholder="User name"></b-form-input> 
                                        </div>                                                                             
                                        <div class="row py-2">
                                            <b-form-input v-model="newUser.email"
                                                        type="email"
                                                        placeholder="Email"></b-form-input> 
                                        </div>                                                                             
                                        <div class="row py-2">
                                            <b-form-input v-model="newUser.password"
                                                        type="password"
                                                        placeholder="Password"></b-form-input> 
                                        </div>                                                                             
                                        <div class="row py-2">
                                            <b-form-input v-model="newUser.confirmPassword"
                                                        type="password"
                                                        placeholder="Confirm Password"></b-form-input> 
                                        </div>                                                                             
                                    </div>
                                </div>
                            </div>
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
            users: [
            {
                id: 1,
                name: 'test 1',
                email: 'test@gmail.com'   
            },
            {
                id: 2,
                name: 'test 2',
                email: 'abc@arimac.lk'  
            }],
            newUser:{},
            newUserState: false
        }
    },
    methods:{
        async onOk(){
            this.$axios.setHeader('Content-Type', 'application/json')    
            const newUserResponse = await this.$axios.post('auth/register', {
                name : this.newUser.userName,
                email : this.newUser.email,
                password : this.newUser.password,
                confirm_password : this.newUser.confirmPassword
            })
            if(newUserResponse.data.result === "user_registration_is_successful"){
                    this.newUserState = true
            }
            console.log(newUserResponse.data.result)    
        },
        onDOMClick(){
            this.newUserState = false
        }
    }
}
</script>
