<template>
  <div class="card">
    <img :src="banner" />
    <div class="background"></div>
    <figcaption>{{ title }}</figcaption>
  </div>
</template>

<script>
export default {
  props: {
    banner: { type: String, default: null },
    title: { type: String, default: null },
    nextProjectSlug: { type: Object, default: () => ({}) },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  margin: 5px 10px;
  img {
    width: 100%;
    height: 100%;
    filter: grayscale(1);
  }

  figcaption {
    font-family: "Circular Std Book", sans-serif;
    position: absolute;
    top: 16px;
    left: 19px;
    color: white;
    font-weight: 500;
    letter-spacing: 0.5;
    font-size: 35px;
    opacity: 0;
    transition-duration: 0.5s;
  }
  &:hover {
    img {
      filter: grayscale(0);
    }
    figcaption {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    opacity: 0;
    transition-duration: 0.5s;
    background-image: linear-gradient(to right, #00000077, #00000014);
    &:hover {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }
}
@media (max-width: 800px) {
  .card {
    margin: 3.5px 7px;
    figcaption {
      left: 0;
      font-size: 30px;
      padding-left: 5px;
    }
  }
}
</style>
