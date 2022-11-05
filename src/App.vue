<template>
  <pv-toast/>
  <RouterView v-if="isLogged === false" v-on:user-logged="userLoggedIn"/>
  <Navbar v-if="isLogged"></Navbar>
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
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("auth"));
    if(user) {
      this.isLogged = true;
    }
  }
}

</script>
<style></style>
