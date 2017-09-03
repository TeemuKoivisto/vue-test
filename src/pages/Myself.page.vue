<template>
  <div>
    <h1>This me</h1>
    <p>I am {{ `${userLoggedIn.firstname} ${userLoggedIn.lastname}` }}</p>
    <p>{{ userLoggedIn.email }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'myself-page',
  computed: mapGetters([
    'userLoggedIn'
  ])
}
</script>

<style lang="scss">

</style>
