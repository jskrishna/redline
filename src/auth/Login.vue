<template>
      <section class="login-main">
    <div class="login-inner">
      <div class="login-header">
        <a href="/">
       <img src="../assets/logo.svg" alt="">
        </a>
      </div>
      <div class="login-box">
        <h1>{{ $route.name }}</h1>
        <div class="login-form">
          <b-form>
            <b-form-group
              id="input-group-1"
              label="User Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Enter email address"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="User Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="text-center mt-35">
              <b-button type="submit" class="custom-btn" @click="login">Login</b-button>
              <!-- <router-link to="/dashboard">dashboard</router-link> -->
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
methods:{
    login(){
     this.$router.push("/dashboard");
    }
}
 
};
</script>
