import HttpService from './httpService'

export default class HttpOrganisationTypeService {

  constructor() {
    this.httpService = new HttpService();
  }

  fetch () {
      return this.httpService.get('OrganisationType');
  }
}
