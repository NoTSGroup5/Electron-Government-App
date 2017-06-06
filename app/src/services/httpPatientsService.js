import HttpService from './httpService'

class HttpPatientsService {
    constructor() {
        this.httpService = new HttpService()
    }

    fetch() {
        return this.httpService.get('Patient')
    }

    getPatientbyBsn(bsn) {
        return this.httpService.getById('Patient', bsn);
    }

    addPatient(model) {
        return this.httpService.post('PatientCreate', { patient: model });
    }

    editPatient(bsn, model) {
        delete model.bsn;

        return this.httpService.put('Patient/' + bsn, model);
    }
}

export default new HttpPatientsService();