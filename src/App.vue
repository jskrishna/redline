<template>
  <div id="app">
    <div class="main-wrapper" v-if="showSidebar">
      <SideBar />
      <main class="wrapper">
        <div class="card">
          <router-view />
        </div>
      </main>
    </div>
    <div class="main-wrapper" v-else>
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
      return this.$route.name !== "Login";
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: Inter;
}
</style>
