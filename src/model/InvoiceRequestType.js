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
 * Enum class InvoiceRequestType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "BALANCE"
   * @const
   */
  "BALANCE": "BALANCE",
  /**
   * value: "DEPOSIT"
   * @const
   */
  "DEPOSIT": "DEPOSIT",
  /**
   * value: "INSTALLMENT"
   * @const
   */
  "INSTALLMENT": "INSTALLMENT"};

/**
 * Returns a <code>InvoiceRequestType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/InvoiceRequestType} The enum <code>InvoiceRequestType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;

