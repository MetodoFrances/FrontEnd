class DataTransferService {
    constructor() {
        this.user = null;
        this.userLogged = false;
        this.data = [];
        this.tir = null;
        this.van = null;
    }
}
const $dataTransfer = new DataTransferService();
export default $dataTransfer;