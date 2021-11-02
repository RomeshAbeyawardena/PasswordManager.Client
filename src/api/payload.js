export default {
    buildPayLoad(header, parameters) {
        let payload = "".concat(header, ":");

        payload += parameters.join("|");

        return btoa(payload);
    }
}