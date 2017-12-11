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
var Money = require('./Money');




/**
 * The ChargeRequestAdditionalRecipient model module.
 * @module model/ChargeRequestAdditionalRecipient
 * @version 2.5.1
 */

/**
 * Constructs a new <code>ChargeRequestAdditionalRecipient</code>.
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender. Support is currently limited to USD, CAD and GBP currencies
 * @alias module:model/ChargeRequestAdditionalRecipient
 * @class
 * @param locationId {String} The location ID for a recipient (other than the merchant) receiving a portion of the tender.
 * @param description {String} The description of the additional recipient.
 * @param amountMoney {module:model/Money} The amount of money distributed to the recipient.
 */
var exports = function(locationId, description, amountMoney) {
  var _this = this;

  _this['location_id'] = locationId;
  _this['description'] = description;
  _this['amount_money'] = amountMoney;
};

/**
 * Constructs a <code>ChargeRequestAdditionalRecipient</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ChargeRequestAdditionalRecipient} obj Optional instance to populate.
 * @return {module:model/ChargeRequestAdditionalRecipient} The populated <code>ChargeRequestAdditionalRecipient</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
    }
  return obj;
}

/**
 * The location ID for a recipient (other than the merchant) receiving a portion of the tender.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The description of the additional recipient.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The amount of money distributed to the recipient.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;



module.exports = exports;



