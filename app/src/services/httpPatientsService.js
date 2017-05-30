import HttpService from './httpService'

export default class HttpPatientsService {

  constructor () {
    this.httpService = new HttpService()
  }

  fetch () {
    return this.httpService.get('Patient')
  }

  getPatientbyBsn (bsn) {
    return this.httpService.get(`Patient/${bsn}`);
  }

  addPatient(bsn, firstName, namePrefix, lastName, gender, birthday, streetName, streetNumber, streetNumberExtra, zipCode, residence, telephoneNumber, email) {
    return this.httpService.post('Patient', {
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
    });
  }
}
