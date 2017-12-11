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
 * The CatalogV1Id model module.
 * @module model/CatalogV1Id
 * @version 2.5.1
 */

/**
 * Constructs a new <code>CatalogV1Id</code>.
 * An Items Connect V1 object ID along with its associated [location](#type-location) ID.
 * @alias module:model/CatalogV1Id
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CatalogV1Id</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogV1Id} obj Optional instance to populate.
 * @return {module:model/CatalogV1Id} The populated <code>CatalogV1Id</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_v1_id')) {
      obj['catalog_v1_id'] = ApiClient.convertToType(data['catalog_v1_id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
    }
  return obj;
}

/**
 * The ID for an object in Connect V1, if different from its Connect V2 ID.
 * @member {String} catalog_v1_id
 */
exports.prototype['catalog_v1_id'] = undefined;
/**
 * The ID of the [location](#type-location) this Connect V1 ID is associated with.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;



module.exports = exports;



