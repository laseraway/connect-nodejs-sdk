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
var Error = require('./Error');
var LoyaltyEvent = require('./LoyaltyEvent');




/**
 * The AccumulateLoyaltyPointsResponse model module.
 * Note: This model is in beta.
 * @module model/AccumulateLoyaltyPointsResponse
 */

/**
 * Constructs a new <code>AccumulateLoyaltyPointsResponse</code>.
 * A response containing the resulting loyalty event.
 * @alias module:model/AccumulateLoyaltyPointsResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>AccumulateLoyaltyPointsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AccumulateLoyaltyPointsResponse} obj Optional instance to populate.
 * @return {module:model/AccumulateLoyaltyPointsResponse} The populated <code>AccumulateLoyaltyPointsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('event')) {
      obj['event'] = LoyaltyEvent.constructFromObject(data['event']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The resulting loyalty event.
 * @member {module:model/LoyaltyEvent} event
 */
exports.prototype['event'] = undefined;



module.exports = exports;



