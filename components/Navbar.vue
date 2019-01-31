<template>
<div class="row">
    <b-navbar toggleable="md" type="dark" class="ada-dawasa-pink" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="#"><b-img src="/app-icon.png" fluid alt="icon" class="app-icon-wrap"/></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown text='User' right>
                <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                <b-dropdown-item @click="onLogout">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
  methods:{
    async onLogout(){
        await this.$auth.logout()
        this.$router.push("/login")
    }
  } 
}
</script>


<style>
.navbar{
    height: 8vh;
    width: 100%;
}

.app-icon-wrap{
    width: 3rem;
}

.ada-dawasa-pink{
    background-color: var(--ada-dawasa-pink);
}
</style>

