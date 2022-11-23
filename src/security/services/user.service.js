import http from "../../shared/services/http-common.service.js";
class UserService {
    constructor() {
        this._endpoint = "/users";
    }
    signIn(userDto) {
        return http.post("/login",userDto);
    }
    signUp(newUserDto) {
        return http.post("/register",newUserDto);
    }
    getUser(userid){
        return http.get("/login",userid);
    }
}
export default new UserService();