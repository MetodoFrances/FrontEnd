<template>
    <div class="sign-in-container-left">
        <h1 class="sign-in__title">INICIO DE SESION</h1>
        <div class="sign-in-container-input">
          <div class="sign-in__banner-img-container">
            <img class="sign-in__banner-img" src="../../assets/leasingfy-home-backround-image.png" alt="Leasingfy Background Image">
          </div>
          <form class="sign-in__form" @submit.prevent="handleSubmit(!v$.$invalid)">
            <img class="sign-in__img" src="../../assets/leasingfy-icon.png" alt="Leasingfy Icon">
              <pv-input-text class="sign-in__input" type="text" v-model="v$.email.$model" placeholder="Correo"></pv-input-text><nav></nav>
              <Password inputClass="sign-in__input" :feedback="false" v-model="v$.password.$model" placeholder="Contraseña"></Password><br>
              <pv-button label="¿Olvidaste tu contraseña?" @click="goToRecoverPassword"/><br>
              <pv-button class="sign-in__btn" label="Iniciar Sesión" type="submit"></pv-button>
              <h2 class="sign-in__subtitle">¿No tienes una cuenta? </h2>
            <pv-button  class="sign-in__btn__register" label="Regístrate Aquí" @click="goToRegister"></pv-button>
          </form>
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
            if(!isFormValid) {
                console.log("Not Valid");
                return;
            }
            const user = this.UserDto();
            this.$store.dispatch("auth/login",user)
                .then( response => {
                    this.$dataTransfer.user = {...response.user};
                    this.$dataTransfer.userLogged = true;
                    this.$emit("user-logged");
                    this.$toast.add({severity: "success", summary: "User logged in succesfully", detail: "You are able to enjoy the app!!!", life: 3000});
                  },
                  rejected => {
                    console.log(rejected);
                  }
                )
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
        },
        goToRecoverPassword() {
          console.log("to recover");
          this.$router.push({
            name: "recover-password"
          })
        }
    },
    created() {
      const user = JSON.parse(localStorage.getItem("auth"));
      if(!user) return;
      this.$router.push({
        name: "leasing",
        params: { id: user.id }
      });
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
.sign-in-container-left{
  font-family: 'Roboto Slab', serif;
  width: 100%;
  font-size: 50px;
}
.sign-in-container-input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.sign-in__title{
  font-size: 35px;
  text-align: center;
  color:#FB8C00
}
.sign-in__subtitle{
  color: rgba(176, 176, 176, 0.83);
  font-size: 15px;
  font-weight: normal;
}
.sign-in__btn{
  background:#FB8C00;
  border-color: #FB8C00;
  width : 140px;
  height: 35px;
}
.sign-in__form {
  text-align: center;
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
  position: relative;
  display: block;
  width: 150px;
  height: 150px;
  left: 50%;
  padding: 1.5rem;
  transform: translateX(-50%);
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
.sign-in__banner-img{
  display: block;
  width: 100%;
  height: 20rem;
}

@media (max-width: 580px) {
  .sign-in__banner-img{
    display: block;
    width: 80%;
    margin: 0 auto;
    height: auto;
  }
  .sign-in__banner-img-container {
    padding: 2rem;
  }
}

</style>