<template>
  <main class="main__container">
    <h1>hei olen etusivu</h1>
    <p class="home__text">{{ yo }}</p>
  </main>
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
.main {
  &__container {
    border: 1px solid black;
  }
}
.home__text {
  padding: 0;
  margin: 0;
}
</style>