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

    add(id, name, street, houseNumber, houseNumberExtra, zipCode, city, type){
        return this.httpService.post(this.url, {
            id : id,
            name : name,
            city : city,
            street : street,
            houseNumber : houseNumber,
            zipCode : zipCode,
            houseNumberExtra: houseNumberExtra,
            organisationType : type
        });
    }

    update(id, name, street, houseNumber, houseNumberExtra, zipCode, city, type){
        return this.httpService.put(this.url + '/' + id, {
            name : name,
            city : city,
            street : street,
            houseNumber : houseNumber,
            zipCode : zipCode,
            houseNumberExtra: houseNumberExtra,
            organisationType : type
        });
    }

    del (id) {
        return this.httpService.del(this.url + '/' + id);
    }
}

export default new HttpOrganisationService();