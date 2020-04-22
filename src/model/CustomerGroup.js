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
 * The CustomerGroup model module.
 * Note: This model is in beta.
 * @module model/CustomerGroup
 */

/**
 * Constructs a new <code>CustomerGroup</code>.
 * Represents a group of customer profiles.   Customer groups can be created, modified, and have their membership defined either via  the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
 * @alias module:model/CustomerGroup
 * @class
 * @param name {String} Name of the customer group.
 */
var exports = function(name) {
  var _this = this;


  _this['name'] = name;


};

/**
 * Constructs a <code>CustomerGroup</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerGroup} obj Optional instance to populate.
 * @return {module:model/CustomerGroup} The populated <code>CustomerGroup</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * Unique Square-generated ID for the customer group.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Name of the customer group.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The timestamp when the customer group was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The timesamp when the customer group was last updated, in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;


