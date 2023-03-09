<template>
  <div class="home">
    <NavHeader />
    <ProjectView />
  </div>
</template>

<script>
import NavHeader from "@/components/Header/NavHeader.vue";
import ProjectView from "./ProjectView/ProjectView.vue";
export default {
  name: "HomeView",
  components: {
    NavHeader,
    ProjectView,
  },
};
</script>

<style lang="scss">
.home {
  width: 70%;
}
</style>
