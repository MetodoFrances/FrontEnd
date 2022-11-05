<template>
  <pv-toast/>
  <RouterView v-show="isLogged === false" v-on:user-logged="userLoggedIn"/>
  <Navbar v-show="isLogged"></Navbar>
</template>

<script>
import Navbar from './shared/pages/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      isLogged: false
    }
  },
  methods: {
    userLoggedIn() {
      this.isLogged = true;
    },
    userLoggedOut() {
      this.isLogged = false;
    }
  }
}

</script>

<style scoped>

</style>
