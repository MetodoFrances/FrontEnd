import userService from "./user.service";
class AuthService {
    login(user) {
        return userService.signIn(user).then( response => {
            if(response.data.accessToken) {
                localStorage.setItem("auth",JSON.stringify(response.data.user));
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
export default new AuthService();