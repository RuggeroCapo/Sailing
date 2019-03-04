<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Gauges from "./components/gauges.vue";

export default {
  components: {
    "app-header": Header
  },
  data() {
    return {};
  }
};
</script>

