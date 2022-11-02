import http from "../../shared/services/http-common.js"

export class ConfigurationApiService {
    constructor() {
        this._endpoint = "/settings";
    }
    getSettings() {
        return http.get(this._endpoint);
    }

    saveSettings(settings){
        return http.post(this._endpoint,settings);
    }

}