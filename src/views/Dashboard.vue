<template>
  <div class="page-header">
    <h1>{{ $route.name }}</h1>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $("#example").DataTable();
  },
};
</script>
