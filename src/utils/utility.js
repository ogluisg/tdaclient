"use strict";
exports.__esModule = true;
exports.buildQuery = void 0;
var buildQuery = function (url, config) {
    Object.entries(config).map(function (entry, index, entries) {
        var param = entry[0], value = entry[1];
        if (index === 0) {
            url += '?';
        }
        if (param !== 'symbol') {
            var str = "".concat(param, "=").concat(value);
            if (entries.length - 1 !== index) {
                str += '&';
            }
            url += str;
        }
    });
    return url;
};
exports.buildQuery = buildQuery;
