import Vue from "vue";
const { DateTime } = require("luxon");

Vue.filter("date", (value, format) => {
    if (!format) {
        format = "dd LLL yyyy HH:mm";
    }

    return DateTime.fromISO(value).toFormat(format);
});