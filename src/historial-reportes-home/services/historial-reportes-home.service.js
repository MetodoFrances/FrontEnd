import httpCommonService from "../../shared/services/http-common.service";
export class ReportsApiService {
    constructor() {
        this._endpoint = "/loans";
    }
    getLoansByUserId(userId) {
        return httpCommonService.get(`${this._endpoint}/user_id=${userId}`);
    }
}