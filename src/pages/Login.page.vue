<template>
  <div class="login__container">
    <form @submit.prevent="handleSubmit" class="login__form">
      <div class="form-group">
        <label>Email</label>
        <input v-model="loginForm.email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="loginForm.password" type="password">
      </div>
      <div class="form-group">
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login-page',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    }
  }),
  computed: mapGetters([
    'isLoggedIn',
    'userLoggedIn'
  ]),
  methods: { ...{
    handleSubmit () {
      this.loginUser({ payload: this.loginForm })
        .then(() => {
          if (this.isLoggedIn) {
            this.$router.push('/myself')
          }
        })
    }
  },
    ...mapActions([
      'loginUser'
    ])
  }
}
</script>

<style lang="scss">
  $login-form-width: 500px;
  .login {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: $login-form-width;
    }

  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
