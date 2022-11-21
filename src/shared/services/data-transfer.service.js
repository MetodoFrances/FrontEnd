class DataTransferService {
    constructor() {
        this.user = null;
        this.userLogged = false;
        this.data = [];
        this.tirN = null;
        this.vanN = null;
        this.tirB = null;
        this.vanB = null;
        this.totalInterest = null;
        this.totalAmortization = null;
    }
}
const $dataTransfer = new DataTransferService();
export default $dataTransfer;