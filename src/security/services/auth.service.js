import userService from "./user.service";
class AuthService {
    login(user) {
        return userService.signIn(user).then( response => {
            if(response.data.token) {
                localStorage.setItem("auth", JSON.stringify(response.data));
            }
            return response.data;
        })
    }
    logout() {
        localStorage.removeItem("auth");
    }
    registerUser(user) {
        return userService.signUp(user);
    }
}