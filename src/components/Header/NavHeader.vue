<template>
  <nav :class="{ 'is-about-page': active === 'about' }">
    <div>
      <router-link :to="{ name: 'home' }">
        <img
          v-if="active === 'about'"
          src="../../assets/images/Isolation_Mode.png"
        />
        <h1 v-else>Miogx</h1>
      </router-link>
    </div>
    <div v-if="active !== 'about'" class="navigation">
      <router-link :class="{ active: active === 'home' }" :to="{ name: 'home' }"
        >Work</router-link
      >
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <div v-else class="social-media">
      <a
        href="https://www.instagram.com/miogx_/"
        target="_blank"
        rel="noopener noreferrer"
        ><instagramSVG
      /></a>
    </div>
  </nav>
</template>
<script>
import instagramSVG from "@/assets/svg/instagramSVG.vue";
export default {
  data() {
    return {
      active: this.$route.name,
    };
  },
  components: { instagramSVG },
};
</script>
<style lang="scss" scoped>
nav {
  font-family: "Circular Std Book", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 80px;
  padding-top: 43px;
  padding-left: 7px;
  padding-right: 7px;
  h1 {
    font-size: 40px;
    font-weight: 500;
    margin: 0;
  }
  p,
  a {
    font-size: 16px;
    text-decoration: none;
    color: black;
    margin: 0;
    &.active {
      opacity: 0.7;
    }
  }
  .navigation {
    display: flex;
    gap: 27px;
  }
}
@media (max-width: 800px) {
  nav {
    &:not(.is-about-page) {
      flex-direction: column;
      align-items: center;
    }
    padding: 15px;
  }
}
</style>
