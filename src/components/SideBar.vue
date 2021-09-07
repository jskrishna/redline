<template>
  <nav id="sidebarMenu" class="sidebar">
    <b-navbar-brand href="#">
      <img src="../assets/logo.svg" alt="" />
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
    </b-navbar-nav>
    <b-navbar-nav class="main-logout">
      <b-nav-item class="log-out" to="" @click="logout">Log Out</b-nav-item>
    </b-navbar-nav>
  </nav>
</template>

<script>
export default {
methods:{
    logout(){
     this.$router.push("/");
    },
}
};
</script>

<style scoped>
.navbar-brand {
  width: 100%;
  display: block;
  padding: 40px 20px;
}
.navbar-brand img {
  width: 240px;
}
.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  width: 300px;
  background: #fff;
}
.main-nav {
  height: calc(100vh - 220px);
  overflow: auto;
}
.main-nav .nav-link {
  color: #000;
  font-weight: 600;
  padding: 20px;
}
.main-nav .nav-link img {
  width: 23px;
  margin-right: 15px;
}
.nav-item.log-out {
  padding: 0 20px;
}
.nav-item.log-out a {
  color: #fff;
  font-weight: 600;
  text-align: center;
  background: #18541d;
  padding: 15px;
  border-radius: 5px;
}
</style>