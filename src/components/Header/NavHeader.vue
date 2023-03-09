<template>
  <nav>
    <div>
      <h1>Miogx</h1>
    </div>
    <div class="navigation">
      <p class="active">Work</p>
      <p>About</p>
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  font-family: "Circular Std Book", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h1 {
    font-size: 25px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
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
