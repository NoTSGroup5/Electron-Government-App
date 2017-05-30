import Config from '../../../config'
import Vue from 'vue'

export default class HttpService {
    get(url) {
        return Vue.http.get(Config.apiUrl + url).then((results) => {
            return this._stripRestrictedValues(results.body);
        });
    }

    getById(url, id) {
        return Vue.http.get(Config.apiUrl + url + '/' + id).then((response) => {
            return response.body;
        });
    }

    post(url, data) {
        return Vue.http.post(Config.apiUrl + url, data);
    }

    put(url, data) {
        return Vue.http.put(Config.apiUrl + url, data);
    }

    del(url) {
        return Vue.http.delete(Config.apiUrl + url);
    }

    _stripRestrictedValues(items) {
        items.forEach(item => {
            this.restrictedFields.forEach(field => delete item[field])
        });

        return items;
    }

    get restrictedFields() {
        return ['$class'];
    }
}
