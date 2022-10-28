import http from "../../shared/services/http-common.service.js";
class UserService {
    constructor() {
        this._endpoint = "/users";
    }
    signIn(userDto) {
        return http.post("/login",userDto);
    }
    signUp(newUserDto) {
        return http.post(`${this._endpoint}/register`,newUserDto);
    } 
}
export default new UserService();