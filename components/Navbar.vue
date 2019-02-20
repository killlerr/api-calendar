<template>
  <div class="row">
    <b-navbar type="dark" class="ada-dawasa-pink">
      <b-navbar-brand to="/">
        <!-- <b-img src="/app-icon.png" fluid alt="icon" class="app-icon-wrap"/> -->
        <span class="mx-4 icon--pointer"><i class="far fa-calendar-alt fa-sm fa-icon__nav"></i></span>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto nav--inline">
        <div class="nav--inline">
          <b-navbar-brand to="/profile">
            <span class="mx-2 icon--pointer">
              <i class="far fa-user fa-sm fa-icon__nav"></i>
            </span>
          </b-navbar-brand>
          <b-navbar-brand @click="onLogout">
            <span class="mx-2 icon--pointer">
              <i class="fas fa-sign-out-alt fa-sm fa-icon__nav"></i>
            </span>
          </b-navbar-brand>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    async onLogout() {
      await this.$auth.logout();
      this.$router.push("/login");
    }
  }
};
</script>


<style>
.navbar {
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
}

.app-icon-wrap {
  width: 3rem;
}

.ada-dawasa-pink {
  background-color: var(--creative-black);

}

.fa-icon__nav {
  margin-top: 12px;
  color: white;
}

.nav--inline {
  display: flex;
}

.icon--pointer{
  cursor: pointer;
}
</style>

