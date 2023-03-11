<template>
  <nav>
    <div>
      <router-link :to="{ name: 'home' }">
        <img
          v-if="active === 'about'"
          src="../../assets/images/Isolation_Mode.png"
        />
        <h1 v-else>Miogx</h1>
      </router-link>
    </div>
    <div class="navigation">
      <router-link :class="{ active: active === 'home' }" :to="{ name: 'home' }"
        >Work</router-link
      >
      <router-link
        :class="{ active: active === 'about' }"
        :to="{ name: 'about' }"
        >About</router-link
      >
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      active: this.$route.name,
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  font-family: "Circular Std Book", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: "80px";
  padding-top: 43px;
  h1 {
    font-size: 25px;
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
</style>
