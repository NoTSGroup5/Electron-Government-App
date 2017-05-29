import HttpService from './httpService'

export default class HttpPatientsService {

  constructor () {
    this.httpService = new HttpService()
  }

  get restrictedFields () {
    return ['$class']
  }

  fetch () {
    return this.httpService.get('Patient')
                 .then(this._stripRestrictedValues.bind(this))
  }

  getPatientbyBsn (bsn) {
    return this.httpService.get(`Patient/${bsn}`)
                 .then(this._stripRestrictedValues.bind(this))
  }

  addPatient(bsn, firstName, namePrefix, lastName, gender, birthday, streetName, streetNumber, streetNumberExtra, zipCode, residence, telephoneNumber, email){

     /* o String bsn
      o String firstName
      o String namePrefix optional
      o String lastName
      o String email
      o String telephoneNumber
      o String birthday
      o String gender
      o String city
      o String zipCode
      o String street
      o String houseNumber
      o String houseNumberExtra optional*/

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

  _stripRestrictedValues (patients) {
      patients.forEach(patient => {
        this.restrictedFields.forEach(field => delete patient[field])
      });

      return patients
  }

}
