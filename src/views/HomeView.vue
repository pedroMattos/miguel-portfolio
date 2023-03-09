<template>
  <div class="home">
    <NavHeader />
  </div>
</template>

<script>
import NavHeader from "@/components/Header/NavHeader.vue";
export default {
  name: "HomeView",
  components: {
    NavHeader,
  },
};
</script>

<style lang="scss">
.home {
  width: 70%;
}
</style>
