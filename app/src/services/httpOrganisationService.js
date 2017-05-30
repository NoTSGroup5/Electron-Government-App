import HttpService from './httpService'

export default class HttpOrganisationService {

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

    add(id, name, streetName, streetNumber, streetNumberExtra, zipCode, residence, type){
        return this.httpService.post(this.url, {
            id : id,
            name : name,
            city : residence,
            street : streetName,
            houseNumber : streetNumber,
            zipCode : zipCode,
            houseNumberExtra: streetNumberExtra,
            organisationType : type
        });
    }

    update(id, name, streetName, streetNumber, streetNumberExtra, zipCode, residence, type){
        return this.httpService.put(this.url + '/' + id, {
            name : name,
            city : residence,
            street : streetName,
            houseNumber : streetNumber,
            zipCode : zipCode,
            houseNumberExtra: streetNumberExtra,
            organisationType : type
        });
    }

    del (id) {
        return this.httpService.del(this.url + '/' + id);
    }
}
