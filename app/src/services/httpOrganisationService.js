import HttpService from './httpService'

class HttpOrganisationService {
    constructor () {
        this.httpService = new HttpService();
        this.url = 'Organisation'
    }

    fetch () {
        return this.httpService.get(this.url)
    }

    getById(id){
        return this.httpService.getById(this.url, id);
    }

    findByName(name){
        return this.httpService.get(this.url + `?filter={"name" : "${name}"}`);
    }

    add(model){
        return this.httpService.post(this.url, model);
    }

    update(id, model){
        return this.httpService.put(this.url + '/' + id, model);
    }

    del (id) {
        return this.httpService.del(this.url + '/' + id);
    }
}

export default new HttpOrganisationService();