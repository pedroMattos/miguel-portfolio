<template>
  <div>
    <NavHeader />
    <section v-if="loaded">
      <router-link
        v-for="(item, index) in projectsData"
        :key="index"
        :to="{ name: 'SingleProject', params: { name: item.slug } }"
        ><ProjectCard :banner="item.banner" :title="item.title"
      /></router-link>
    </section>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
import NavHeader from "@/components/Header/NavHeader.vue";
import getProject from "@/services/getProjects";
export default {
  components: {
    ProjectCard,
    NavHeader,
  },
  data() {
    return {
      projectsData: null,
      loaded: false,
    };
  },
  methods: {
    async displayProjects() {
      this.projectsData = await getProject();
      this.loaded = true;
    },
  },
  beforeMount() {
    this.displayProjects();
  },
};
</script>

<style lang="scss" scoped>
section {
  width: fit-content;
  margin: 100px auto;
  display: grid;
  grid-template-columns: auto auto;
}
@media (max-width: 800px) {
  section {
    grid-template-columns: auto;
  }
}
</style>
