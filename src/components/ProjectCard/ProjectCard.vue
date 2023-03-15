<template>
  <div class="card">
    <img src="../../assets/images/project-placeholder.jpg" />
    <div class="background"></div>
    <figcaption>Lorem Ipsum</figcaption>
  </div>
</template>

<style lang="scss">
.card {
  position: relative;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }

  figcaption {
    font-family: "Circular Std Book", sans-serif;
    position: absolute;
    top: 16px;
    left: 19px;
    color: white;
    font-weight: 500;
    letter-spacing: 0.5;
    font-size: 40px;
    opacity: 0;
    transition-duration: 0.5s;
  }
  &:hover {
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
    bottom: 0;
    background-image: linear-gradient(to right, #00000014, #00000094);
  }
}
</style>
