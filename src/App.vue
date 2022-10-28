<template>
  <pv-toast/>
  <SignUp></SignUp>
</template>

<script>
import SignUp from "./security/pages/sign-up.component.vue";

export default {
  components: {
    SignUp
  },
  data() {
    return {
      msg: "This is an empty app component"
    }
  }
}
</script>

<style scoped>

</style>
