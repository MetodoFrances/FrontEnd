import { ref } from "vue";

export const data = ref({
    userLogged: false,
    setUserLogged(value) {
        this.userLogged = value;
    }
});