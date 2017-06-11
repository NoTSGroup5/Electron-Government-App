import HttpService from './httpService'

class HttpMedicalFileService {

    constructor () {
        this.httpService = new HttpService();
        this.url = 'OrganisationType'
    }

    getMedicalFile(bsn) {
        return this.httpService.getById("MedicalFile", bsn);
    }

    saveMedicalFile(bsn, medicalFile) {
        return this.httpService.put("MedicalFile/" + bsn, medicalFile);
    }
}

export default new HttpMedicalFileService();