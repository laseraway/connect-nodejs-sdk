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
var Address = require('./Address');




/**
 * The CreateCustomerCardRequest model module.
 * @module model/CreateCustomerCardRequest
 * @version 2.5.1
 */

/**
 * Constructs a new <code>CreateCustomerCardRequest</code>.
 * Defines the fields that are included in the request body of a request to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
 * @alias module:model/CreateCustomerCardRequest
 * @class
 * @param cardNonce {String} A card nonce representing the credit card to link to the customer.  Card nonces are generated by the `SqPaymentForm` that buyers enter their card information into. See [Embedding the payment form](/articles/adding-payment-form/) for more information.  __Note:__ Card nonces generated by digital wallets (e.g., Apple Pay) cannot be used to create a customer card.
 */
var exports = function(cardNonce) {
  var _this = this;

  _this['card_nonce'] = cardNonce;


};

/**
 * Constructs a <code>CreateCustomerCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateCustomerCardRequest} obj Optional instance to populate.
 * @return {module:model/CreateCustomerCardRequest} The populated <code>CreateCustomerCardRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('card_nonce')) {
      obj['card_nonce'] = ApiClient.convertToType(data['card_nonce'], 'String');
    }
      if (data.hasOwnProperty('billing_address')) {
      obj['billing_address'] = Address.constructFromObject(data['billing_address']);
    }
      if (data.hasOwnProperty('cardholder_name')) {
      obj['cardholder_name'] = ApiClient.convertToType(data['cardholder_name'], 'String');
    }
    }
  return obj;
}

/**
 * A card nonce representing the credit card to link to the customer.  Card nonces are generated by the `SqPaymentForm` that buyers enter their card information into. See [Embedding the payment form](/articles/adding-payment-form/) for more information.  __Note:__ Card nonces generated by digital wallets (e.g., Apple Pay) cannot be used to create a customer card.
 * @member {String} card_nonce
 */
exports.prototype['card_nonce'] = undefined;
/**
 * Address information for the card on file. Only the `postal_code` field is required for payments in the US and Canada.
 * @member {module:model/Address} billing_address
 */
exports.prototype['billing_address'] = undefined;
/**
 * The cardholder's name.
 * @member {String} cardholder_name
 */
exports.prototype['cardholder_name'] = undefined;



module.exports = exports;



