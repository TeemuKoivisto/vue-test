<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email</label>
        <input v-model="loginForm.email">
      </div>
      <div>
        <label>Password</label>
        <input v-model="loginForm.password" type="password">
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login-page',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    }
  }),
  methods: { ...{
    handleSubmit () {
      this.loginUser({ payload: this.loginForm })
    }
  },
    ...mapActions([
      'loginUser'
    ])
  }
}
</script>

<style lang="scss">

</style>
