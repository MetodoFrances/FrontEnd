<template>
    <form class="sign-up__form" @submit.prevent="handleSubmit(!v$.$invalid)">
        <pv-input-text type="text" v-model="v$.name.model" placaholder="Name"></pv-input-text>
        <pv-input-text type="text" v-model="v$.email.$model" placeholder="Email"></pv-input-text>
        <pv-input-text type="text" v-model="v$.password.$model" placeholder="Password"></pv-input-text>
        <pv-input-text type="text" v-model="v$.repeatedPassword.$model" placeholder="Repeat password"></pv-input-text>
        <p>Have signed up yet?</p>
        <pv-button label="Sign In" @click="goToSignIn"></pv-button>
        <pv-button label="Sign Up" type="submit"></pv-button>
    </form>
</template>

<script>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
    name: "sign-up",
    setup: () => ({v$: useVuelidate() }),
    data() {
        return {
            name: null,
            surname: null,
            ruc: null,
            email: null,
            submitted: false,
            password: null,
            repeatedPassword: null
        }
    },
    validations() {
        return  {
            name: {
                required
            },
            surname: {
                required
            },
            ruc: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: 5
            },
            repeatedPassword: {
                required,
                minLength: 5
            }
        }
    },
    methods: {
        goToSignIn() {

        },
        async handleSubmit(isFormValid) {
            if(!isFormValid) return;
            if(!this.passwordsMatches()) return;
            const newUser = this.userDto();
            this.$store.dispatch("auth/register", newUser)
                .then( response => {
                    //this.$toast.add({})
                    console.log(response);
                    this.goToSignIn();
                })
                .catch( reason => {
                    console.error(reason);
                })
        },
        userDto() {
            return {
                name: this.name,
                surname: this.surname,
                ruc: this.ruc,
                email: this.email,
                password: this.password
            }
        }
    },
    computed: {
        passwordsMatches() {
            return this.password === this.repeatedPassword;
        }
    }
}
</script>

<style>

</style>