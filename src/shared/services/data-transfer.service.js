export class DataTransferService {
    constructor() {
        this.user = null;
        this.canDisplayNavigation = false;
    }
}
const $dataTransfer = new DataTransferService();
export default $dataTransfer;