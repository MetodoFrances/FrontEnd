<template>
    <div class="sign-in-container">
        <h1 class="sign-in__title">Inicio de Sesion</h1>
        <img class="sign-in__img" src="../../assets/leasingfy-icon.png" alt="Leasingfy Icon">
        <form class="sign-in__form" @submit.prevent="handleSubmit(!v$.$invalid)">
            <pv-input-text type="text" v-model="v$.email.$model" placeholder="Email"></pv-input-text>
            <pv-input-text type="text" v-model="v$.password.$model" placeholder="Password"></pv-input-text>
            <pv-button label="Sign In" type="submit"></pv-button>
        </form>
        <img class="sign-in__banner-img" src="../../assets/leasingfy-home-backround-image.png" alt="Leasingfy Background Image">
        <pv-button label="Go to Register" @click="goToRegister"></pv-button>
    </div>
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
        async handleSubmit(isFormValid) {
            this.submitted = true;
            this.notFound = false;
            if(!isFormValid) return;
            const user = this.UserDto();
            this.$store.dispatch("auth/login",user)
                .then( response => {
                    this.$dataTransfer.user = response.user;
                })
                .catch( reason => {
                    console.error(reason);
                })
        },
        UserDto() {
            return {
                email: this.email,
                password: this.password
            }
        },
        goToRegister() {
            this.$router.push({
                name: "sign-up"
            })
        }
    }
}
</script>

<style>

</style>