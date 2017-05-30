import HttpService from './httpService'

class HttpMedicalFileService {

    constructor () {
        this.httpService = new HttpService();
        this.url = 'OrganisationType'
    }

    getMedicalFile(bsn) {
        return this.httpService.get("MedicalFile?filter={\"owner\":\"" + bsn + "\"}");
    }

    saveMedicalFile(medicalFile) {
        let id = medicalFile.id;

        delete medicalFile.id;

        return this.httpService.put("MedicalFile/" + id, medicalFile);
    }
}

export default new HttpMedicalFileService();