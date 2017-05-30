import HttpService from './httpService'

export default class httpDossierService {

  constructor () {
    this.httpService = new HttpService()
  }

  get restrictedFields () {
    return ['$class', 'owner', 'id']
  }

  getDossiers () {
    return this.httpService.get('MedicalFile')
                 .then(this._stripRestrictedValues.bind(this))
  }

  getDossierbyBsn (bsn) {
    return this.httpService.get(`MedicalFile?filter={"owner":"${bsn}"}`)
                 .then(this._stripRestrictedValues.bind(this))
  }

  _stripRestrictedValues (patients) {
    if (patients === undefined) return patients

    if (patients.length > 0) {
      patients.forEach(patient => {
        this.restrictedFields.forEach(field => delete patient[field])
      })
    }
    else
      this.restrictedFields.forEach(field => delete patients[field])
      
    return patients
  }

}
