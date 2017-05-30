import HttpService from './httpService'

export default class HttpPatientsService {
    constructor() {
        this.httpService = new HttpService()
    }

    fetch() {
        return this.httpService.get('Patient')
    }

    getPatientbyBsn(bsn) {
        return this.httpService.getById('Patient', bsn);
    }

    addPatient(bsn, firstName, namePrefix, lastName, gender, birthday, streetName, streetNumber, streetNumberExtra, zipCode, residence, telephoneNumber, email) {
        return this.httpService.post('PatientCreate', {
            patient : {
                bsn : bsn,
                firstName : firstName,
                namePrefix : namePrefix,
                lastName : lastName,
                email : email,
                telephoneNumber : telephoneNumber,
                birthday : birthday,
                gender : gender,
                city : residence,
                street : streetName,
                houseNumber : streetNumber,
                houseNumberExtra : streetNumberExtra,
                zipCode : zipCode
            }
        });
    }

    editPatient(bsn, firstName, namePrefix, lastName, gender, birthday, streetName, streetNumber, streetNumberExtra, zipCode, residence, telephoneNumber, email) {
        return this.httpService.put('Patient/' + bsn, {

            firstName : firstName,
            namePrefix : namePrefix,
            lastName : lastName,
            email : email,
            telephoneNumber : telephoneNumber,
            birthday : birthday,
            gender : gender,
            city : residence,
            street : streetName,
            houseNumber : streetNumber,
            houseNumberExtra : streetNumberExtra,
            zipCode : zipCode
        });
    }
}
