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
    define(['ApiClient', 'model/DocumentSignerTemplateConf', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentSignerTemplateConf'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.Template = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.DocumentSignerTemplateConf, root.SignrequestClient.User);
  }
}(this, function(ApiClient, DocumentSignerTemplateConf, User) {
  'use strict';




  /**
   * The Template model module.
   * @module model/Template
   * @version v1
   */

  /**
   * Constructs a new <code>Template</code>.
   * @alias module:model/Template
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Template} obj Optional instance to populate.
   * @return {module:model/Template} The populated <code>Template</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('who')) {
        obj['who'] = ApiClient.convertToType(data['who'], 'String');
      }
      if (data.hasOwnProperty('signers')) {
        obj['signers'] = ApiClient.convertToType(data['signers'], [DocumentSignerTemplateConf]);
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Defaults to filename
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * `m`: only me, `mo`: me and others, `o`: only others
   * @member {module:model/Template.WhoEnum} who
   */
  exports.prototype['who'] = undefined;
  /**
   * @member {Array.<module:model/DocumentSignerTemplateConf>} signers
   */
  exports.prototype['signers'] = undefined;


  /**
   * Allowed values for the <code>who</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WhoEnum = {
    /**
     * value: "m"
     * @const
     */
    "m": "m",
    /**
     * value: "mo"
     * @const
     */
    "mo": "mo",
    /**
     * value: "o"
     * @const
     */
    "o": "o"  };


  return exports;
}));


