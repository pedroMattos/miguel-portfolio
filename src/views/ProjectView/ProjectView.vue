<template>
  <section>
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
};
</script>

<style lang="scss">
section {
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto;
}
@media (max-width: 800px) {
  section {
    grid-template-columns: auto;
  }
}
</style>
