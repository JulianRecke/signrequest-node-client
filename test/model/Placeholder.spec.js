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
    instance = new SignrequestClient.Placeholder();
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

  describe('Placeholder', function() {
    it('should create an instance of Placeholder', function() {
      // uncomment below and update the code to test Placeholder
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be.a(SignrequestClient.Placeholder);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property pageIndex (base name: "page_index")', function() {
      // uncomment below and update the code to test the property pageIndex
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property prefill (base name: "prefill")', function() {
      // uncomment below and update the code to test the property prefill
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property checkboxValue (base name: "checkbox_value")', function() {
      // uncomment below and update the code to test the property checkboxValue
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property dateValue (base name: "date_value")', function() {
      // uncomment below and update the code to test the property dateValue
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new SignrequestClient.Placeholder();
      //expect(instance).to.be();
    });

  });

}));