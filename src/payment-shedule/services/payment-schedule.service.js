import http from "../../shared/services/http-common.js";
export class PaymentScheduleApiService {
  constructor() {
    this._endpoint = "/loans";
  }
  createLoan(loanDto) {
    return http.post(this._endpoint, loanDto);
  }
  getLoans() {
    return http.get(this._endpoint);
  }
}
