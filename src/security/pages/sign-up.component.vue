<template>
    <div class="sign-up-container">
        <h1 class="sign-up__title">Registro</h1>
        <div class="sign-up-container-input">
          <form class="sign-up__form" @submit.prevent="handleSubmit(!v$.$invalid)">
            <pv-input-text class="sign-up__input" type="text" v-model="v$.name.$model" placeholder="Nombre"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.surname.$model" placeholder="Apellidos"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.ruc.$model" placeholder="RUC"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.email.$model" placeholder="Correo electrónico"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.password.$model" placeholder="Contraseña"></pv-input-text><nav></nav>
            <pv-input-text class="sign-up__input" type="text" v-model="v$.repeatedPassword.$model" placeholder="Confirmar contraseña"></pv-input-text><nav></nav>
            <pv-button class="sign-up__btn-register" label="Registrarse" type="submit"></pv-button>
            <p class="sign-up__p-register">¿Ya te registraste?
            <router-link class="no-underline" to="/sign-in">Iniciar Sesión</router-link></p>
          </form>
        </div>
        <div class="sign-up__banner-img-container">
          <img class="sign-up__banner-img" src="../../assets/Leasingfy-img-main-register.png" alt="Leasingfy Background Image">
        </div>
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
  margin-top: 80px;
  font-size: 35px;
}
.sign-up__form{
  width: 60%;
  max-width: 550px;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  margin-left:400px;
  margin-top: 100px;
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


.sign-up__banner-img-container{
  margin:-30rem 55%;

}
.sign-up__banner-img{
  width: 600px;
  height: 400px;

}
@media (max-width: 1600px){
  .sign-up__banner-img{
    width: 500px;
    height: 300px;
    margin:-15rem 1rem;
  }
  .sign-up__form{
    margin:6rem 1rem;
  }
}
</style>