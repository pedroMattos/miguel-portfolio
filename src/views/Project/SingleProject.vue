<template>
  <div class="single-project">
    <router-link v-if="isMobile" :to="{ name: 'home' }">
      <div class="close-area">
        <CloseSVG />
      </div>
    </router-link>
    <NavHeader v-else />
    <section class="title">
      <h1>{{ currentProject.title }}</h1>
      <p>{{ currentProject.description }}</p>

      <div class="credits">
        <p><b>Credits</b></p>
        <p>{{ currentProject.credits }}</p>
      </div>
    </section>

    <section v-if="currentProject" class="galery">
      <div
        class="image-wrapper"
        v-for="(item, index) in currentProject.receipt"
        :key="index"
      >
        <img
          v-if="item.type === 'image'"
          :src="item.image"
          @load="displayAnimation"
        />
        <iframe
          v-if="item.type !== 'image'"
          width="100%"
          :src="item.image"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          @load="displayAnimationIframe"
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
      currentProject: "currentProject",
    }),
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  methods: {
    displayAnimationIframe() {
      const iframes = document.querySelector("iframe");
      iframes.classList.add("image-anim");
      setTimeout(() => {
        iframes.classList.remove("image-anim");
        iframes.classList.add("image-perm");
      }, 1000);
    },
    displayAnimation() {
      const image = document.querySelector("img");
      const iframes = document.querySelector("iframe");
      image.classList.add("image-anim");
      if (iframes) {
        iframes.classList.add("image-anim");
      }
      setTimeout(() => {
        image.classList.remove("image-anim");
        image.classList.add("image-perm");
      }, 1000);
    },
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
  },
};
</script>

<style lang="scss" scoped>
.single-project {
  .image-wrapper {
    display: flex;
    flex-direction: column;
  }
  iframe {
    height: 720px;
  }
  .close-area {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  font-family: "Circular Std Book", sans-serif;
  section {
    display: flex;
    margin-top: 100px;
    padding: 0 7px;
    flex-direction: column;
    gap: 7px;
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
        top: 50px;
        opacity: 0;
        &.image-perm {
          top: 0px;
          opacity: 1;
        }
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

.image-anim {
  animation-delay: 1s;
  animation: slideIn 1s;
  position: relative;
}

@keyframes slideIn {
  0% {
    top: 50px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .single-project {
    iframe {
      height: 30vh;
    }
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
