import HttpService from './httpService'

export default class httpPatientsService {

  constructor () {
    this.httpService = new HttpService()
  }

  get restrictedFields () {
    return ['$class']
  }

  getPatients () {
    return this.httpService.get('Patient')
                 .then(this._stripRestrictedValues.bind(this))
  }

  getPatientbyBsn (bsn) {
    return this.httpService.get(`Patient/${bsn}`)
                 .then(this._stripRestrictedValues.bind(this))
  }

  _stripRestrictedValues (patients) {
    if (patients.length > 0) {
      patients.forEach(patient => {
        this.restrictedFields.forEach(field => delete patient[field])
      })
      return patients
    }
  }

}
