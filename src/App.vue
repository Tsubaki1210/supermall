<template>
  <div id="app">
    <router-view></router-view>
    <maintab-bar></maintab-bar>
  </div>
</template>

<script>
import MaintabBar from "./components/content/maintabbar/MaintabBar.vue";

export default {
  name: "App",
  components: {
    MaintabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
