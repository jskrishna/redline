<template>
  <div id="app">
    <div class="container-fluid" v-if="showSidebar">
     <div class="row">
        <div>
        <SideBar />
        </div>
        <main class="wrapper">
          <div class="card">
            <router-view />
          </div>
        </main>
      </div>
    </div>
    <div class="container-fluid" v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: { SideBar },
    computed: {
    showSidebar() {
      return (
        this.$route.name !== "Login"
      );
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: Inter;
}
</style>
