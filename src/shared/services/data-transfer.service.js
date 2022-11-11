class DataTransferService {
    constructor() {
        this.user = null;
        this.userLogged = false;
        this.data = [];
    }
}
const $dataTransfer = new DataTransferService();
export default $dataTransfer;