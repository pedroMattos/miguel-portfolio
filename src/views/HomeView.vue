<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import getProject from "@/services/getProjects";

export default {
  name: "HomeView",

  mounted() {
    // getProject();
  },
};
</script>

<style lang="scss">
.home {
  width: 70%;
}
</style>
