/**
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.SigningLog = factory(root.SignrequestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SigningLog model module.
   * @module model/SigningLog
   * @version v1
   */

  /**
   * Constructs a new <code>SigningLog</code>.
   * @alias module:model/SigningLog
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SigningLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SigningLog} obj Optional instance to populate.
   * @return {module:model/SigningLog} The populated <code>SigningLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pdf')) {
        obj['pdf'] = ApiClient.convertToType(data['pdf'], 'String');
      }
      if (data.hasOwnProperty('security_hash')) {
        obj['security_hash'] = ApiClient.convertToType(data['security_hash'], 'String');
      }
    }
    return obj;
  }

  /**
   * Temporary URL to signing log, expires in five minutes
   * @member {String} pdf
   */
  exports.prototype['pdf'] = undefined;
  /**
   * SHA256 hash of PDF contents
   * @member {String} security_hash
   */
  exports.prototype['security_hash'] = undefined;



  return exports;
}));


