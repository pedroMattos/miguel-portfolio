<template>
  <div class="single-project">
    <NavHeader />

    <section v-if="loaded" class="title">
      <h1>{{ projectData.title }}</h1>
      <p>{{ projectData.description }}</p>

      <div class="credits">
        <p><b>Credits</b></p>
        <p>{{ projectData.credits }}</p>
      </div>
    </section>

    <section v-if="loaded" class="galery">
      <div v-for="(item, index) in projectData.media" :key="index">
        <h2 v-if="item.title">{{ item.title }}</h2>
        <div v-for="(image, indexImages) in item.images" :key="indexImages">
          <img :src="getImageUrl(image)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavHeader from "@/components/Header/NavHeader.vue";
import getSingleProject from "@/services/getSingleProject";

export default {
  data() {
    return {
      projectData: null,
      loaded: false,
      title: "Camarote Salvador",
      description:
        "Participei do conceito do camarote salvador, edição, motion, 3D, cobertura e derivações de peças",
      credits:
        "Credits Miogx - Direction, Composition and Animation Paulinho - Art Direction",
      media: [
        {
          titile: null,
          images: ["shirt", "mockup"],
        },
        {
          titile: "BreakDown",
          images: ["shirt", "mockup"],
        },
      ],
    };
  },
  components: { NavHeader },
  beforeMount() {
    this.displayProject();
  },
  methods: {
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
  font-family: "Circular Std Book", sans-serif;
  section {
    margin-top: 100px;
    &.title {
      text-align: start;
      width: 450px;
      p {
        font-weight: 400;
        color: #818181;
      }

      .credits {
        p {
          margin: 0;
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
}
</style>
