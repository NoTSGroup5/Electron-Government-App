import HttpService from './httpService'

export default class HttpOrganisationService {

    constructor () {
        this.httpService = new HttpService();
        this.url = 'HealthCareProfessional'
    }

    fetch () {
        return this.httpService.get(this.url)
    }

    add(model){
        return this.httpService.post(this.url, model);
    }

    getById(id){
        return this.httpService.getById(this.url, id);
    }

    update(id, model){
        return this.httpService.put(this.url + '/' + id, model);
    }
}