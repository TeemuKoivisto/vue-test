<template>
  <nav class="navbar__container">
    <ul class="navbar__links">
      <li class="navbar__links__item"><router-link to="/" class="navbar__link">Home</router-link></li>
      <li v-if="isLoggedIn" class="navbar__links__item">
        <router-link to="/myself" class="navbar__link">{{ userLoggedIn.firstname }}</router-link>
      </li>
    </ul>
    <ul class="navbar__links">
      <li class="navbar__links__item">
        <a v-if="isLoggedIn" @click="handleLogout" to="/login" class="navbar__link">Logout</a>
        <router-link v-else to="/login" class="navbar__link">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'navbar',
  computed: mapGetters([
    'isLoggedIn',
    'userLoggedIn'
  ]),
  methods: { ...{
    handleLogout () {
      this.logoutUser()
    }
  },
    ...mapActions([
      'logoutUser'
    ])
  }
}
</script>

<style lang="scss">
$navbar-color: #333;
$navbar-height: 100px;

.navbar {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $navbar-height;
    background-color: $navbar-color;
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
    color: white;
  }
}
</style>