<template>
    <div class="sign-up-container">
        <h1 class="sign-up__title">Registro</h1>
        <div class="sign-up-container-input">
          <div class="sign-up__banner-img-container">
            <img class="sign-up__banner-img" src="../../assets/Leasingfy-img-main-register.png" alt="Leasingfy Background Image">
          </div>
          <form class="sign-up__form" @submit.prevent="handleSubmit(!v$.$invalid)">
            <pv-input-text class="sign-up__input" type="text" v-model="v$.name.$model" placeholder="Nombre"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.surname.$model" placeholder="Apellidos"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.ruc.$model" placeholder="RUC"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.email.$model" placeholder="Correo electrónico"></pv-input-text><nav></nav>
            <Password inputClass="sign-up__input" v-model="v$.password.$model" placeholder="Contraseña"></Password><nav></nav>
            <Password inputClass="sign-up__input" v-model="v$.repeatedPassword.$model" placeholder="Confirmar contraseña"></Password><nav></nav>
            <pv-button class="sign-up__btn-register" label="Registrarse" type="submit"></pv-button>
            <p class="sign-up__p-register">¿Ya te registraste?
            <router-link class="no-underline" to="/sign-in">Iniciar Sesión</router-link></p>
          </form>
        </div>
    </div>
</template>

<script>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { Settings } from "../../shared/services/settings.js";
import { ConfigurationApiService } from "../../configuration/service/configuration.service.js";

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
            repeatedPassword: null,
            settingsService: new ConfigurationApiService()
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
            this.$router.push({
                name: "sign-in"
            });
        },
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
                        setTimeout(() => {

                        },1000);
                        const newSettings = new Settings(null,response.id,"Perú","Español");
                        this.settingsService.saveSettings(newSettings.toObjectForCreating());
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
  font-size: 35px;
}
.sign-up__form{
  width: 100%;
  max-width: 550px;
  font-size: 50px;
  text-align: center;
}
.sign-up__input{
  border:white;
  border-bottom: #666666 solid 1px;
  width: 300px;
}
.sign-up__btn-register{
  background:#FB8C00;
  border-color: #FB8C00;
  width : 140px;
  height: 35px;
}
.sign-up__btn-register:hover {
  background: #fb8c00;
  border-color: white;
}
.sign-up__p-register{
  font-size: 15px;
  color: rgba(176, 176, 176, 0.83);
  margin-bottom: 10px;
}
.no-underline{
  font-size: 15px;
}

.sign-up-container-input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media (max-width: 650px) {
  .sign-up__banner-img-container{
    padding: 2rem;
  }
  .sign-up__banner-img{
    width: 30rem;
    height: 20rem;
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
  .sign-up__form{
    padding: 2rem;
  }
}
</style>