<template>
  <div class="dashboard-page">
    <h1>{{ $route.name }}</h1>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $("#example").DataTable();
  }
};
</script>
