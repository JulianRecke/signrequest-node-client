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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SignrequestClient);
  }
}(this, function(expect, SignrequestClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SignrequestClient.DocumentSignerTemplateConf();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentSignerTemplateConf', function() {
    it('should create an instance of DocumentSignerTemplateConf', function() {
      // uncomment below and update the code to test DocumentSignerTemplateConf
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be.a(SignrequestClient.DocumentSignerTemplateConf);
    });

    it('should have the property signerIndex (base name: "signer_index")', function() {
      // uncomment below and update the code to test the property signerIndex
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property needsToSign (base name: "needs_to_sign")', function() {
      // uncomment below and update the code to test the property needsToSign
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property approveOnly (base name: "approve_only")', function() {
      // uncomment below and update the code to test the property approveOnly
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property notifyOnly (base name: "notify_only")', function() {
      // uncomment below and update the code to test the property notifyOnly
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property inPerson (base name: "in_person")', function() {
      // uncomment below and update the code to test the property inPerson
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

    it('should have the property placeholders (base name: "placeholders")', function() {
      // uncomment below and update the code to test the property placeholders
      //var instane = new SignrequestClient.DocumentSignerTemplateConf();
      //expect(instance).to.be();
    });

  });

}));
