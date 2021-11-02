import Axios from "axios";
import Promise from "promise";
export default {
    GetApi(baseUrl) {
        return new this.ApiBase(baseUrl);
    },
    ApiBase(baseUrl) {
        this.baseUrl = baseUrl;
        this.post = function (url, payload) {
            return new Promise((resolve) => {
                let fullUrl = this.baseUrl.concat("/", url);
                Axios({
                    url: fullUrl,
                    headers: { "Content-Type": "multipart/form-data" },
                    data: payload
                }).then(e => resolve(e.data))
            });
        }
        this.get = function (url, payload) {
            return new Promise((resolve) => {
                let fullUrl = this.baseUrl.concat("/", url);
                Axios.get(fullUrl, { params: payload })
                .then(e => resolve(e.data))
            });
        }
    },

    
}