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
        <div v-for="(image, indexImages) in item.images" :key="indexImages">
          <img :src="getImageUrl(image.image)" />
          <h2 v-if="image.title">{{ image.title }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getSingleProject from "@/services/getSingleProject";
import NavHeader from "@/components/Header/NavHeader.vue";

export default {
  data() {
    return {
      projectData: null,
      loaded: false,
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
  .close-area {
    display: flex;
    justify-content: flex-end;
  }
  font-family: "Circular Std Book", sans-serif;
  section {
    margin-top: 100px;
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
}

@media (max-width: 800px) {
  .single-project {
    margin: 0 7px;
    section {
      margin-top: 50px;

      &.title {
        width: 100%;
      }
    }
  }
}
</style>
