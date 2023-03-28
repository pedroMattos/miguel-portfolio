<template>
  <div>
    <div v-show="loaded">
      <NavHeader />
      <section>
        <router-link
          v-for="(item, index) in projectsData"
          :key="index"
          :to="{ name: 'SingleProject', params: { name: item.slug } }"
          ><ProjectCard :banner="item.banner" :title="item.title"
        /></router-link>
      </section>
    </div>
    <div v-if="!loaded" class="is-loading">
      <iframe :src="isMobile ? gifMobile : gifLarge" frameborder="0"></iframe>
    </div>
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
      gifLarge:
        "https://firebasestorage.googleapis.com/v0/b/miguel-melo-design-test-bd.appspot.com/o/load%2FGif%20M%20Loading.gif?alt=media&token=97a12d2c-34f5-48b5-abcf-48edf3e551ac",
      gifMobile:
        "https://firebasestorage.googleapis.com/v0/b/miguel-melo-design-test-bd.appspot.com/o/load%2F150x150-fundo-branco.gif?alt=media&token=46707ade-4960-45c5-9e04-c002798d1b1d",
      isMobile: window.innerWidth < 800,
    };
  },
  beforeRouteLeave(to, from, next) {
    this.getNextProjectSlug(
      this.projectsData,
      this.projectsData.findIndex((item) => item.slug === to.params.name)
    );
    next();
  },
  methods: {
    async displayProjects() {
      this.projectsData = await getProject();
      setTimeout(() => {
        this.loaded = true;
      }, 5000);
    },
    getNextProjectSlug(data, actualIndex) {
      if (data.length === actualIndex + 1) return;

      this.$store.commit("nextProject", {
        slug: data[actualIndex + 1].slug,
        title: data[actualIndex + 1].title,
        all: this.projectsData,
      });
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
iframe {
  width: 700px;
  height: 700px;
}
.is-loading {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
@media (max-width: 800px) {
  section {
    grid-template-columns: auto;
    margin: 50px auto;
  }
  iframe {
    width: 150px;
    height: 150px;
  }
  .is-loading {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
}
</style>
