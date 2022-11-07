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
    updateSettings(id,settings) {
        return http.put(`${this._endpoint}/${id}`,settings);
    }

}