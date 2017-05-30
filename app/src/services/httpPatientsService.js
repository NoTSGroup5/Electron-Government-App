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

    addPatient(bsn, firstName, namePrefix, lastName, gender, birthday, street, houseNumber, houseNumberExtra, zipCode, city, telephoneNumber, email) {
        return this.httpService.post('Patient', {
            bsn : bsn,
            firstName : firstName,
            namePrefix : namePrefix,
            lastName : lastName,
            email : email,
            telephoneNumber : telephoneNumber,
            birthday : birthday,
            gender : gender,
            city : city,
            street : street,
            houseNumber : houseNumber,
            houseNumberExtra : houseNumberExtra,
            zipCode : zipCode
        });
    }

    editPatient(bsn, firstName, namePrefix, lastName, gender, birthday, street, houseNumber, houseNumberExtra, zipCode, city, telephoneNumber, email) {
        return this.httpService.put('Patient/' + bsn, {

            firstName : firstName,
            namePrefix : namePrefix,
            lastName : lastName,
            email : email,
            telephoneNumber : telephoneNumber,
            birthday : birthday,
            gender : gender,
            city : city,
            street : street,
            houseNumber : houseNumber,
            houseNumberExtra : houseNumberExtra,
            zipCode : zipCode
        });
    }
}

export default new HttpPatientsService();