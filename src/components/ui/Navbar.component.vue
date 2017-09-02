<template>
  <nav class="navbar__container">
    <ul class="navbar__links">
      <li class="navbar__links__item"><router-link to="/" class="navbar__link">Home</router-link></li>
      <li class="navbar__links__item"><router-link to="/myself" class="navbar__link">Me</router-link></li>
    </ul>
    <ul class="navbar__links">
      <li class="navbar__links__item">
        <router-link to="/login" class="navbar__link">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
.navbar {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    height: 100px;
  }
  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0 0 0 30px;
    list-style: none;

    &:first-child {
      justify-content: flex-start;
    }
    &:last-child {
      justify-content: flex-end;
    }


    &__item {
      margin: 0 10px 0 0;
    }
  }
  &__link {
    text-decoration: none;
  }
}
</style>