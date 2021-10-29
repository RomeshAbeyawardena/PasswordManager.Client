import Axios from "axios";
import Promise from "promise";
export default {
    GetApi(baseUrl) {
        return new this.ApiBase(baseUrl);
    },
    ApiBase(baseUrl) {
        this.baseUrl = baseUrl;
        this.get = function (url, payload) {
            return new Promise((resolve) => {
                Axios.get(baseUrl.concat(["/", "{url}"]), payload)
                .then(e => resolve(e.data))
            });
        }
    },

    
}