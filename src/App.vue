<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/shared/pages/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <p>{{msg}}</p>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
