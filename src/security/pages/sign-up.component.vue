<template>
    <div class="sign-up-container">
        <h1 class="sign-up__title">Register</h1>
        <form class="sign-up__form" @submit.prevent="handleSubmit(!v$.$invalid)">
            <pv-input-text type="text" v-model="v$.name.$model" placeholder="Name"></pv-input-text>
            <pv-input-text type="text" v-model="v$.surname.$model" placeholder="Surname"></pv-input-text>
            <pv-input-text type="text" v-model="v$.email.$model" placeholder="Email"></pv-input-text>
            <pv-input-text type="text" v-model="v$.ruc.$model" placeholder="RUC"></pv-input-text>
            <pv-input-text type="text" v-model="v$.password.$model" placeholder="Password"></pv-input-text>
            <pv-input-text type="text" v-model="v$.repeatedPassword.$model" placeholder="Repeat password"></pv-input-text>
        </form>
        <p>Have signed up yet?</p>
        <pv-button label="Sign Up" type="submit"></pv-button>
        <router-link class="no-underline" to="/sign-in">Go to Sign In</router-link>
    </div>
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
        handleSubmit(isFormValid) {
            console.log(isFormValid);
            if(!isFormValid) {
                this.$toast.add({severity: "error", summary: "Invalid Inputs", detail: "Check your data and try again", life: 3000});
                console.log("Not valid x2");
                return;
            }
            if(!this.passwordsMatches) {
                this.$toast.add({severity: "error", summary: "Passwords don't match", detail: "Check your password and try again", life: 3000});
                console.log("NotValid x3");
                return;
            }
            const newUser = this.userDto();
            this.$store.dispatch("auth/register", newUser)
                .then(
                    response => {
                        this.$toast.add({severity: "success", summary: "User registered succesfully", detail: "You can loggin, try it!", life: 3000})
                        console.log(response);
                        this.goToSignIn();
                    }
                )
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
.sign-up__title {
    font-family: 'Roboto Slab', serif;
    color: #FB8C00;
    text-align: center;
}
</style>