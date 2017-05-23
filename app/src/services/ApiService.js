export class ApiService {

  constructor(){

    // we bind to this so the correct context is bound and we can make use of _baseUrl, _getUrl and the constants
    return{
      getPatients: this.getPatients.bind(this),
      getPatient: this.getPatient.bind(this),
      createPatient: this.createPatient.bind(this),
      getOrganisation: this.getOrganisation.bind(this),
      createOrganisation: this.createOrganisation.bind(this),
      getMedication: this.getMedication.bind(this),
      createMedication: this.createMedication.bind(this),
      updateMedication: this.updateMedication.bind(this),
      removeMedication: this.removeMedication.bind(this)
    }
  }

  // get _baseUrl(){ return "http://localhost:3000/api/"}
  get _baseUrl(){ return ""}

  _getUrl(url){
    return `${this._baseUrl + url}`;
  }

  get CONSTANTS(){
    return {
      ENDPOINTS: {
        PATIENT: "patient/",
        ORGANISATION: "organisation/",
        MEDICATION: "medication/"
      }
    }
  }

  post(url, body){
    return fetch(url, {
            method: "POST",
            body: body
          })
  }

  put(url, body){
      return fetch(url, {
          method: "PUT",
          body: body
        })
  }

  delete(url){
      return fetch(url, {
          method: "DELETE"
        })
  }

  // PATIENT

  getPatients(){
    return fetch(this._getUrl(this.CONSTANTS.ENDPOINTS.PATIENT));
  }

  getPatient (patientId) {
    return fetch(this._getUrl(this.CONSTANTS.ENDPOINTS.PATIENT + patientId));
  }

  createPatient(patientAsset){
    return this.post(this._getUrl(this.CONSTANTS.ENDPOINTS.PATIENT), patientAsset);
  }

  // ORGANISATION

  getOrganisation(organisationId){
    return fetch(this._getUrl(this.CONSTANTS.ENDPOINTS.ORGANISATION + organisationId));
  }

  createOrganisation(organisationAsset){
    return this.post(this._getUrl(this.CONSTANTS.ENDPOINTS.ORGANISATION), organisationAsset);
  }

  // MEDICATION

  getMedication(patientId){
    return fetch(this._getUrl(this.CONSTANTS.ENDPOINTS.MEDICATION + patientId));
  }

  createMedication(patientId, medicationAsset){
    return this.post(this._getUrl(this.CONSTANTS.ENDPOINTS.MEDICATION) + patientId, medicationAsset);
  }
  
  updateMedication(patientId, medicationAsset){
    return this.put(this._getUrl(this.CONSTANTS.ENDPOINTS.MEDICATION) + patientId, medicationAsset);
  }

  removeMedication(patientId, medicationId){
    return this.delete(this._getUrl(`${this.CONSTANTS.ENDPOINTS.MEDICATION + patientId}/${medicationId}`));
  }


}
