<template>
  <nav id="sidebarMenu" class="sidebar">
    <b-navbar-brand href="/">
      <img class="logo" src="../assets/logo.svg" alt="" />
       <img class="res-logo" src="../assets/res-logo.svg" alt="" />
    </b-navbar-brand>
    <b-navbar-nav class="main-nav">
      <b-nav-item to="/dashboard">
        <img src="../assets/dashboard.svg" alt="" />
        <span>Dashboard</span>
      </b-nav-item>
      <b-nav-item to="/car-list">
        <img src="../assets/car.svg" alt="" />
        <span>Car List</span>
      </b-nav-item>
      <b-nav-item to="/part-list">
        <img src="../assets/part.svg" alt="" />
        <span>Part List</span>
      </b-nav-item>
      <b-nav-item class="mob-logout" @click="logout">
        <img src="../assets/logout.svg" alt="">
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="main-logout">
      <a
        href="javascript:void(0)"
        @click="logout"
        class="btn custom-btn"
        class-active=""
        >Log Out <img src="../assets/logout.svg" alt=""></a
      >
    </b-navbar-nav>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>