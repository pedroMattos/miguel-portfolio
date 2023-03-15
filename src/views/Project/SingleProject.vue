<template>
  <div class="single-project">
    <NavHeader />

    <section class="title">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <div class="credits">
        <p><b>Credits</b></p>
        <p>{{ credits }}</p>
      </div>
    </section>

    <section class="galery">
      <div v-for="(item, index) in media" :key="index">
        <h2 v-if="item.titile">{{ item.titile }}</h2>
        <div v-for="(image, indexImages) in item.images" :key="indexImages">
          <img :src="getImageUrl(image)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavHeader from "@/components/Header/NavHeader.vue";

export default {
  data() {
    return {
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
  methods: {
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
