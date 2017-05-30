import HttpService from './httpService'

class HttpOrganisationTypeService {

  constructor () {
    this.httpService = new HttpService()
    this.url = 'OrganisationType'
  }

  fetch () {
    return this.httpService.get(this.url)
  }

  add (id, name, description) {
    return this.httpService.post(this.url, {id, name, description})
  }
}

export default new HttpOrganisationTypeService();