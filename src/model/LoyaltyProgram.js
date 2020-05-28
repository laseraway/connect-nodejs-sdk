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
var LoyaltyProgramAccrualRule = require('./LoyaltyProgramAccrualRule');
var LoyaltyProgramExpirationPolicy = require('./LoyaltyProgramExpirationPolicy');
var LoyaltyProgramRewardTier = require('./LoyaltyProgramRewardTier');
var LoyaltyProgramTerminology = require('./LoyaltyProgramTerminology');




/**
 * The LoyaltyProgram model module.
 * Note: This model is in beta.
 * @module model/LoyaltyProgram
 */

/**
 * Constructs a new <code>LoyaltyProgram</code>.
 * 
 * @alias module:model/LoyaltyProgram
 * @class
 * @param id {String} The Square-assigned ID of the loyalty program. Updates to  the loyalty program do not modify the identifier.
 * @param status {String} Whether the program is currently active. See [LoyaltyProgramStatus](#type-loyaltyprogramstatus) for possible values
 * @param rewardTiers {Array.<module:model/LoyaltyProgramRewardTier>} The list of rewards for buyers, sorted by ascending points.
 * @param terminology {module:model/LoyaltyProgramTerminology} A cosmetic name for the “points” currency.
 * @param locationIds {Array.<String>} The `locations` at which the program is active.
 * @param createdAt {String} The timestamp when the program was created, in RFC 3339 format.
 * @param updatedAt {String} The timestamp when the reward was last updated, in RFC 3339 format.
 * @param accrualRules {Array.<module:model/LoyaltyProgramAccrualRule>} Defines how buyers can earn loyalty points.
 */
var exports = function(id, status, rewardTiers, terminology, locationIds, createdAt, updatedAt, accrualRules) {
  var _this = this;

  _this['id'] = id;
  _this['status'] = status;
  _this['reward_tiers'] = rewardTiers;

  _this['terminology'] = terminology;
  _this['location_ids'] = locationIds;
  _this['created_at'] = createdAt;
  _this['updated_at'] = updatedAt;
  _this['accrual_rules'] = accrualRules;
};

/**
 * Constructs a <code>LoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/LoyaltyProgram} obj Optional instance to populate.
 * @return {module:model/LoyaltyProgram} The populated <code>LoyaltyProgram</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('reward_tiers')) {
      obj['reward_tiers'] = ApiClient.convertToType(data['reward_tiers'], [LoyaltyProgramRewardTier]);
    }
      if (data.hasOwnProperty('expiration_policy')) {
      obj['expiration_policy'] = LoyaltyProgramExpirationPolicy.constructFromObject(data['expiration_policy']);
    }
      if (data.hasOwnProperty('terminology')) {
      obj['terminology'] = LoyaltyProgramTerminology.constructFromObject(data['terminology']);
    }
      if (data.hasOwnProperty('location_ids')) {
      obj['location_ids'] = ApiClient.convertToType(data['location_ids'], ['String']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('accrual_rules')) {
      obj['accrual_rules'] = ApiClient.convertToType(data['accrual_rules'], [LoyaltyProgramAccrualRule]);
    }
    }
  return obj;
}

/**
 * The Square-assigned ID of the loyalty program. Updates to  the loyalty program do not modify the identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Whether the program is currently active. See [LoyaltyProgramStatus](#type-loyaltyprogramstatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The list of rewards for buyers, sorted by ascending points.
 * @member {Array.<module:model/LoyaltyProgramRewardTier>} reward_tiers
 */
exports.prototype['reward_tiers'] = undefined;
/**
 * If present, details for how points expire.
 * @member {module:model/LoyaltyProgramExpirationPolicy} expiration_policy
 */
exports.prototype['expiration_policy'] = undefined;
/**
 * A cosmetic name for the “points” currency.
 * @member {module:model/LoyaltyProgramTerminology} terminology
 */
exports.prototype['terminology'] = undefined;
/**
 * The `locations` at which the program is active.
 * @member {Array.<String>} location_ids
 */
exports.prototype['location_ids'] = undefined;
/**
 * The timestamp when the program was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The timestamp when the reward was last updated, in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * Defines how buyers can earn loyalty points.
 * @member {Array.<module:model/LoyaltyProgramAccrualRule>} accrual_rules
 */
exports.prototype['accrual_rules'] = undefined;



module.exports = exports;



