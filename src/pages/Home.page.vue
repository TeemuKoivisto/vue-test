<template>
  <div class="home__container">
    <h1>Hei olen etusivu</h1>
    <p class="home__text">{{ msg }}</p>
    <p>Olen päivitys 3</p>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data: () => ({
    msg: 'yo'
  })
}
</script>

<style lang="scss">
.home {
  &__container {
    border: 1px solid black;
  }
  &__text {
    padding: 0;
    margin: 0;
  }
}
</style>