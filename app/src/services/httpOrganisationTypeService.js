import HttpService from './httpService'

export default class HttpOrganisationTypeService {

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
