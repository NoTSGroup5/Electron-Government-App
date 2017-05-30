import HttpService from './httpService'

export default class HttpMedicalFileService {

    constructor () {
        this.httpService = new HttpService();
        this.url = 'OrganisationType'
    }

    getMedicalFile(bsn) {
        return this.httpService.get("/MedicalFile?filter={\"owner\":\"" + bsn + "\"}");
    }
}
