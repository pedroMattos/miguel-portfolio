<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.home {
  width: 70%;
}
@media (max-width: 800px) {
  .home {
    width: 100%;
  }
}
</style>
