/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var ObtainTokenRequest = require('../model/ObtainTokenRequest');
var ObtainTokenResponse = require('../model/ObtainTokenResponse');
var RenewTokenRequest = require('../model/RenewTokenRequest');
var RenewTokenResponse = require('../model/RenewTokenResponse');
var RevokeTokenRequest = require('../model/RevokeTokenRequest');
var RevokeTokenResponse = require('../model/RevokeTokenResponse');

/**
 * OAuth service.
 * @module api/OAuthApi
 */

/**
 * Constructs a new OAuthApi. 
 * @alias module:api/OAuthApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ObtainToken
   * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the &#x60;grant_type&#x60; parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
   * @param {module:model/ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObtainTokenResponse} and HTTP response
   */
  this.obtainTokenWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling obtainToken");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-05-28';

    var formParams = {
    };

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ObtainTokenResponse;

    return this.apiClient.callApi(
      '/oauth2/token', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ObtainToken
   * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the &#x60;grant_type&#x60; parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
   * @param {module:model/ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObtainTokenResponse}
   */
  this.obtainToken = function(body) {
    return this.obtainTokenWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * RenewToken
   * &#x60;RenewToken&#x60; is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application&#39;s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The &#x60;Authorization&#x60; header for this endpoint must have the following format:  &#x60;&#x60;&#x60; Authorization: Client APPLICATION_SECRET &#x60;&#x60;&#x60;  Replace &#x60;APPLICATION_SECRET&#x60; with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
   * @param {String} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
   * @param {module:model/RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RenewTokenResponse} and HTTP response
   */
  this.renewTokenWithHttpInfo = function(clientId, body) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: OAuthApi.renewToken");
    var postBody = body;

    // verify the required parameter 'clientId' is set
    if (clientId === undefined || clientId === null) {
      throw new Error("Missing the required parameter 'clientId' when calling renewToken");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling renewToken");
    }


    var pathParams = {
      'client_id': clientId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-05-28';

    var formParams = {
    };

    var authNames = ['oauth2ClientSecret'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RenewTokenResponse;

    return this.apiClient.callApi(
      '/oauth2/clients/{client_id}/access-token/renew', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RenewToken
   * &#x60;RenewToken&#x60; is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application&#39;s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The &#x60;Authorization&#x60; header for this endpoint must have the following format:  &#x60;&#x60;&#x60; Authorization: Client APPLICATION_SECRET &#x60;&#x60;&#x60;  Replace &#x60;APPLICATION_SECRET&#x60; with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
   * @param {String} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
   * @param {module:model/RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RenewTokenResponse}
   */
  this.renewToken = function(clientId, body) {
    return this.renewTokenWithHttpInfo(clientId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RevokeToken
   * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The &#x60;Authorization&#x60; header for this endpoint must have the following format:  &#x60;&#x60;&#x60; Authorization: Client APPLICATION_SECRET &#x60;&#x60;&#x60;  Replace &#x60;APPLICATION_SECRET&#x60; with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
   * @param {module:model/RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeTokenResponse} and HTTP response
   */
  this.revokeTokenWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling revokeToken");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-05-28';

    var formParams = {
    };

    var authNames = ['oauth2ClientSecret'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RevokeTokenResponse;

    return this.apiClient.callApi(
      '/oauth2/revoke', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RevokeToken
   * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The &#x60;Authorization&#x60; header for this endpoint must have the following format:  &#x60;&#x60;&#x60; Authorization: Client APPLICATION_SECRET &#x60;&#x60;&#x60;  Replace &#x60;APPLICATION_SECRET&#x60; with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
   * @param {module:model/RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeTokenResponse}
   */
  this.revokeToken = function(body) {
    return this.revokeTokenWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
