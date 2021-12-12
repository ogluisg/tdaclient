"use strict";
exports.__esModule = true;
exports.TdaClientBuilder = void 0;
var authorizationTokenInterceptor_1 = require("./authorizationTokenInterceptor");
var localFileCredentialProvider_1 = require("../providers/localFileCredentialProvider");
var localCacheCrendentialProvider_1 = require("../providers/localCacheCrendentialProvider");
var tdaClient_1 = require("./tdaClient");
var TdaClientBuilder = /** @class */ (function () {
    function TdaClientBuilder(config) {
        this.config = config;
    }
    TdaClientBuilder.prototype.build = function () {
        var authorizationInterceptor = this.getAuthorizationInterceptor();
        return new tdaClient_1.TdaClient({
            authorizationInterceptor: authorizationInterceptor
        });
    };
    TdaClientBuilder.prototype.getAuthorizationInterceptor = function () {
        if (this.config.authorizationInterceptor)
            return this.config.authorizationInterceptor;
        var provider;
        if (this.config.fileName) {
            provider = new localFileCredentialProvider_1.LocalFileCredentialProvider(this.config.fileName);
        }
        else {
            var _a = this.config, access_token = _a.access_token, refresh_token = _a.refresh_token, client_id = _a.client_id, redirect_uri = _a.redirect_uri;
            provider = new localCacheCrendentialProvider_1.LocalCacheCredentialProvider({
                access_token: access_token,
                refresh_token: refresh_token,
                client_id: client_id,
                redirect_uri: redirect_uri
            });
        }
        return new authorizationTokenInterceptor_1.AuthorizationTokenInterceptor(provider);
    };
    return TdaClientBuilder;
}());
exports.TdaClientBuilder = TdaClientBuilder;
