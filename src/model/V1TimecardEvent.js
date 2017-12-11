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
 * The V1TimecardEvent model module.
 * @module model/V1TimecardEvent
 * @version 2.5.1
 */

/**
 * Constructs a new <code>V1TimecardEvent</code>.
 * @alias module:model/V1TimecardEvent
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>V1TimecardEvent</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1TimecardEvent} obj Optional instance to populate.
 * @return {module:model/V1TimecardEvent} The populated <code>V1TimecardEvent</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('event_type')) {
      obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
    }
      if (data.hasOwnProperty('clockin_time')) {
      obj['clockin_time'] = ApiClient.convertToType(data['clockin_time'], 'String');
    }
      if (data.hasOwnProperty('clockout_time')) {
      obj['clockout_time'] = ApiClient.convertToType(data['clockout_time'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
    }
  return obj;
}

/**
 * The event's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the timecard to list events for.
 * @member {module:model/V1TimecardEvent.EventTypeEnum} event_type
 */
exports.prototype['event_type'] = undefined;
/**
 * The time the employee clocked in, in ISO 8601 format.
 * @member {String} clockin_time
 */
exports.prototype['clockin_time'] = undefined;
/**
 * The time the employee clocked out, in ISO 8601 format.
 * @member {String} clockout_time
 */
exports.prototype['clockout_time'] = undefined;
/**
 * The time when the event was created, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "API_CREATE"
     * @const
     */
    "API_CREATE": "API_CREATE",
    /**
     * value: "API_EDIT"
     * @const
     */
    "API_EDIT": "API_EDIT",
    /**
     * value: "API_DELETE"
     * @const
     */
    "API_DELETE": "API_DELETE",
    /**
     * value: "REGISTER_CLOCKIN"
     * @const
     */
    "REGISTER_CLOCKIN": "REGISTER_CLOCKIN",
    /**
     * value: "REGISTER_CLOCKOUT"
     * @const
     */
    "REGISTER_CLOCKOUT": "REGISTER_CLOCKOUT",
    /**
     * value: "DASHBOARD_SUPERVISOR_CLOSE"
     * @const
     */
    "DASHBOARD_SUPERVISOR_CLOSE": "DASHBOARD_SUPERVISOR_CLOSE",
    /**
     * value: "DASHBOARD_EDIT"
     * @const
     */
    "DASHBOARD_EDIT": "DASHBOARD_EDIT",
    /**
     * value: "DASHBOARD_DELETE"
     * @const
     */
    "DASHBOARD_DELETE": "DASHBOARD_DELETE"  };


module.exports = exports;



