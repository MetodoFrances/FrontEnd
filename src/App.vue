<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/shared/pages/Navbar.vue";
</script>

<template>
  <RouterView v-if="userLogged === false"/>
  <Navbar v-show="userLogged"></Navbar>
  <p>{{msg}}</p>
</template>

<script>
export default {
  data() {
    return {
      userLogged: false
    }
  }
}
</script>

<style scoped>

</style>
