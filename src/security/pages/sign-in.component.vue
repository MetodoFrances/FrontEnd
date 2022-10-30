<template>
    <div class="sign-in-container">
        <div class="sign-in-container-left">
          <h1 class="sign-in__title">INICIO DE SESION</h1>
          <img class="sign-in__img" src="../../assets/leasingfy-icon.png" alt="Leasingfy Icon">
          <div class="sign-in-container-input">
            <form class="sign-in__form" @submit.prevent="handleSubmit(!v$.$invalid)">
              <pv-input-text class="sign-in__input" type="text" v-model="v$.email.$model" placeholder="Correo"></pv-input-text><nav></nav>
              <pv-input-text class="sign-in__input" type="text" v-model="v$.password.$model" placeholder="Contraseña"></pv-input-text>
              <h2 class="sign-in__subtitle">¿Olvidaste tu contraseña?</h2>
              <pv-button class="sign-in__btn" label="Iniciar Sesión" type="submit"></pv-button>
              <h2 class="sign-in__subtitle">¿No tienes una cuenta? <pv-button  class="sign-in__btn__register" label="Regístrate Aquí" @click="goToRegister"></pv-button></h2>
            </form>
          </div>
        </div>
        <div class="sign-in__banner-img-container">
          <img class="sign-in__banner-img" src="../../assets/leasingfy-home-backround-image.png" alt="Leasingfy Background Image">
        </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
  font-family: 'Roboto Slab', serif;
  margin:0;
  padding:0;
}
.sign-in-container-left{
  width: 60%;
  max-width: 550px;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  margin-left:200px;
  margin-top: 180px;
}
.sign-in-container-left>div{
  display: block;
  padding:20px;
}
.sign-in__title{
  font-size: 35px;
  margin-left: 2%;
  color:#FB8C00
}
.sign-in__subtitle{
  color: rgba(176, 176, 176, 0.83);
  font-size: 15px;
  font-weight: normal;
  margin-bottom: -20px;
}
.sign-in__btn{
  background:#FB8C00;
  border-color: #FB8C00;
  width : 140px;
  height: 35px;
}
.sign-in__btn:hover {
  background: #fb8c00;
  border-color: white;
}
.sign-in__input{
  border:white;
  border-bottom: #666666 solid 1px;
  width: 220px;
}
.sign-in__img{
  width: 150px;
  height: 150px;
}
.sign-in__btn__register{
  background:none;
  color:#5AB1F6;
  border-color: white;
  padding-bottom: 5%;
  font-size: 15px;
}
.sign-in__btn__register:hover {
  background: white;
  color: #5AB1F6;
  border-color: white;
}
.sign-in__banner-img-container{
  margin:-30rem 55%;

}
.sign-in__banner-img{
  width: 600px;
  height: 400px;

}
@media (max-width: 1392px){
  .sign-in__banner-img{
    width: 400px;
    height: 300px;
    margin:-20rem 1rem;
  }
  .sign-in-container-left{
    width: 60%;
    max-width: 550px;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    margin-left:10px;
    margin-top: 180px;
  }
}

</style>