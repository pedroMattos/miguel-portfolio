<template>
  <div>
    <NavHeader />
    <section>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste' } }"
        ><ProjectCard
      /></router-link>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste1' } }"
        ><ProjectCard
      /></router-link>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste2' } }"
        ><ProjectCard
      /></router-link>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste3' } }"
        ><ProjectCard
      /></router-link>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste4' } }"
        ><ProjectCard
      /></router-link>
      <router-link :to="{ name: 'SingleProject', params: { name: 'teste5' } }"
        ><ProjectCard
      /></router-link>
    </section>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
import NavHeader from "@/components/Header/NavHeader.vue";
export default {
  components: {
    ProjectCard,
    NavHeader,
  },
};
</script>

<style lang="scss" scoped>
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
