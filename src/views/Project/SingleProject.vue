<template>
  <div class="single-project">
    <router-link v-if="isMobile" :to="{ name: 'home' }">
      <div class="close-area">
        <CloseSVG />
      </div>
    </router-link>
    <NavHeader v-else />

    <section v-if="loaded" class="title">
      <h1>{{ projectData.title }}</h1>
      <p>{{ projectData.description }}</p>

      <div class="credits">
        <p><b>Credits</b></p>
        <p>{{ projectData.credits }}</p>
      </div>
    </section>

    <section v-if="loaded" class="galery">
      <div v-for="(item, index) in projectData.receipt" :key="index">
        <img v-if="item.type === 'image'" :src="item.image" />
        <iframe
          v-else
          width="100%"
          height="50vh"
          src="https://player.vimeo.com/video/802897228?api=1&amp;background=1&amp;mute=0&amp;autoplay=1&amp;loop=1&amp;color=ff5900&amp;title=0&amp;byline=0&amp;portrait=0"
          frameborder="0"
        ></iframe>
        <h2 v-if="item.title">{{ item.title }}</h2>
      </div>
    </section>

    <div v-if="nextProject" class="next-project">
      <router-link
        :to="{ name: 'SingleProject', params: { name: nextProject.slug } }"
      >
        {{ nextProject.title }} >
      </router-link>
    </div>
  </div>
</template>

<script>
import getSingleProject from "@/services/getSingleProject";
import NavHeader from "@/components/Header/NavHeader.vue";
import CloseSVG from "@/assets/svg/closeSVG.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      projectData: null,
      loaded: false,
      isMobile: window.innerWidth < 800,
    };
  },
  components: { NavHeader, CloseSVG },
  watch: {
    $route(to) {
      this.savenextProject(
        this.nextProject.all.findIndex((item) => item.slug === to.params.name)
      );
    },
  },
  computed: {
    ...mapGetters({
      nextProject: "getNextProject",
    }),
  },
  beforeMount() {
    this.displayProject();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  methods: {
    savenextProject(actualIndex) {
      window.location.reload();
      if (this.nextProject.all.length === actualIndex + 1) return;

      if (!this.nextProject.all) {
        this.$store.commit("nextProject", null);
        return;
      }
      this.$store.commit("nextProject", {
        slug: this.nextProject.all[actualIndex + 1].slug,
        title: this.nextProject.all[actualIndex + 1].title,
        all: this.projectsData,
      });
    },
    async displayProject() {
      this.projectData = await getSingleProject(this.$route.params.name);
      this.loaded = true;
    },
    getImageUrl(url) {
      var images = require.context("../../assets/images/", false, /\.png$/);
      return images("./" + url + ".png");
    },
  },
};
</script>

<style lang="scss" scoped>
.single-project {
  .close-area {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  font-family: "Circular Std Book", sans-serif;
  section {
    margin-top: 100px;
    padding: 0 7px;
    &.title {
      h1 {
        margin-bottom: 21px;
        font-size: 35px;
      }
      text-align: start;
      width: 450px;
      p {
        font-weight: 400;
        letter-spacing: -0.05em;
        color: #818181;
      }

      .credits {
        margin-top: 39px;
        p {
          margin: 0;
          font-size: 12px;
          font-weight: 450;
          b {
            color: black;
          }
        }
      }
    }
    &.galery {
      margin-top: 80px;
      img {
        width: 100%;
        max-height: 50%;
        object-fit: cover;
      }
      h2 {
        margin-top: 60px;
        margin-bottom: 60px;
        font-size: 35px;
      }
    }
  }
  .next-project {
    margin-top: 70px;
    margin-bottom: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      font-size: 20px;
      color: black;
      text-decoration: none;
    }
  }
}

@media (max-width: 800px) {
  .single-project {
    margin: 0 7px;
    section {
      padding: 0;
      margin-top: 50px;

      &.title {
        width: 100%;
      }
    }
  }
}
</style>
