import http from "../../shared/services/http-common.js"
export class ConfigurationApiService {
    constructor() {
        this._endpoint = "/loans";
    }
    getLoans() {
        return http.get(this._endpoint);
    }
}