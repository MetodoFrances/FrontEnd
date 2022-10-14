<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView />

<template>
  <p>{{msg}}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "This is an empty app component"
    }
  }
}
</script>

<style scoped>

</style>
