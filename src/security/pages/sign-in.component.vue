<template>
    <h1>Inicio de Sesion</h1>
    <img src="../../assets/leasingfy-icon.png">
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
        
    </form>
  
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
    name: "sign-in",
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            email: null,
            submitted: false,
            password: null,
            notFound: false
        }
    },
    validations() {
        return {
            email: {
                required
            },
            password: {
                required
            }
        }
    },
    methods : {
        async handleSubmit(isFomrValid) {
            this.submitted = true;
            this.notFound = false;
            
        }
    }
}
</script>

<style>

</style>