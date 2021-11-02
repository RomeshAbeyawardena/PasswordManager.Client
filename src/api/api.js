import Axios from "axios";
import Promise from "promise";

export default {
    GetApi(baseUrl) {
        return new this.ApiBase(baseUrl);
    },
    ApiBase(baseUrl) {
        this.baseUrl = baseUrl;
        this.post = function (url, payload) {
            return new Promise((resolve, reject) => {
                let fullUrl = this.baseUrl.concat("/", url);
                
                let formData = new FormData(    );

                for (let v in payload) {
                    formData.append(v, payload[v]);
                }
                
                Axios({
                    url: fullUrl,
                    method: "POST",
                    headers: { "Content-Type": "multipart/form-data" },
                    data: formData
                }).then(e => resolve(e.data)).catch(error => reject(error.response))
            });
        }
        this.get = function (url, payload) {
            return new Promise((resolve) => {
                let fullUrl = this.baseUrl.concat("/", url);
                Axios.get(fullUrl, { params: payload })
                    .then(e => resolve(e.data))
                    .catch(e => console.log(e));
            });
        }
    },

    
}