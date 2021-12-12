"use strict";
exports.__esModule = true;
exports.PRICE_HISTORY = exports.ORDERS = exports.OAUTH2_TOKEN = exports.ACCOUNTS = exports.AUTHENTICATION = void 0;
var ROUTES = {
    hostname: 'https://api.tdameritrade.com',
    endpoints: {
        oauth2Token: '/v1/oauth2/token',
        auth: '/auth',
        accounts: '/v1/accounts',
        orders: '/v1/orders',
        priceHistory: function (symbol) { return "/v1/marketdata/".concat(symbol, "/pricehistory"); }
    }
};
exports.AUTHENTICATION = "".concat(ROUTES.hostname).concat(ROUTES.endpoints.oauth2Token);
exports.ACCOUNTS = "".concat(ROUTES.hostname).concat(ROUTES.endpoints.accounts);
exports.OAUTH2_TOKEN = "".concat(ROUTES.hostname).concat(ROUTES.endpoints.oauth2Token);
exports.ORDERS = "".concat(ROUTES.hostname).concat(ROUTES.endpoints.orders);
var PRICE_HISTORY = function (symbol) { return "".concat(ROUTES.hostname).concat(ROUTES.endpoints.priceHistory(symbol)); };
exports.PRICE_HISTORY = PRICE_HISTORY;
