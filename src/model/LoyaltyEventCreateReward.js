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




/**
 * The LoyaltyEventCreateReward model module.
 * Note: This model is in beta.
 * @module model/LoyaltyEventCreateReward
 */

/**
 * Constructs a new <code>LoyaltyEventCreateReward</code>.
 * Provides metadata when the event &#x60;type&#x60; is &#x60;CREATE_REWARD&#x60;.
 * @alias module:model/LoyaltyEventCreateReward
 * @class
 * @param loyaltyProgramId {String} The ID of the `loyalty program`.
 * @param points {Number} The loyalty points used to create the reward.
 */
var exports = function(loyaltyProgramId, points) {
  var _this = this;

  _this['loyalty_program_id'] = loyaltyProgramId;

  _this['points'] = points;
};

/**
 * Constructs a <code>LoyaltyEventCreateReward</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/LoyaltyEventCreateReward} obj Optional instance to populate.
 * @return {module:model/LoyaltyEventCreateReward} The populated <code>LoyaltyEventCreateReward</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('loyalty_program_id')) {
      obj['loyalty_program_id'] = ApiClient.convertToType(data['loyalty_program_id'], 'String');
    }
      if (data.hasOwnProperty('reward_id')) {
      obj['reward_id'] = ApiClient.convertToType(data['reward_id'], 'String');
    }
      if (data.hasOwnProperty('points')) {
      obj['points'] = ApiClient.convertToType(data['points'], 'Number');
    }
    }
  return obj;
}

/**
 * The ID of the `loyalty program`.
 * @member {String} loyalty_program_id
 */
exports.prototype['loyalty_program_id'] = undefined;
/**
 * The Square-assigned ID of the created `loyalty reward`. This field is returned only if the event source is `LOYALTY_API`.
 * @member {String} reward_id
 */
exports.prototype['reward_id'] = undefined;
/**
 * The loyalty points used to create the reward.
 * @member {Number} points
 */
exports.prototype['points'] = undefined;



module.exports = exports;



