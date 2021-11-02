export default {
    buildPayLoad(header, parameters) {

        for (let p in parameters) {
            parameters[p] = btoa(p);
        }

        let payload = "".concat(header, ":");

        payload += parameters.join("|");

        return btoa(payload);
    }
}