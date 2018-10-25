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
    define(['ApiClient', 'model/DocumentAttachment', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DocumentAttachment'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.DocumentAttachmentsApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.DocumentAttachment, root.SignrequestClient.InlineResponse2001);
  }
}(this, function(ApiClient, DocumentAttachment, InlineResponse2001) {
  'use strict';

  /**
   * DocumentAttachments service.
   * @module api/DocumentAttachmentsApi
   * @version v1
   */

  /**
   * Constructs a new DocumentAttachmentsApi. 
   * @alias module:api/DocumentAttachmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the documentAttachmentsCreate operation.
     * @callback module:api/DocumentAttachmentsApi~documentAttachmentsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Document Attachment
     * 
     * @param {module:model/DocumentAttachment} data 
     * @param {module:api/DocumentAttachmentsApi~documentAttachmentsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentAttachment}
     */
    this.documentAttachmentsCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling documentAttachmentsCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentAttachment;

      return this.apiClient.callApi(
        '/document-attachments/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the documentAttachmentsList operation.
     * @callback module:api/DocumentAttachmentsApi~documentAttachmentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of Document Attachments
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.documentUuid 
     * @param {String} opts.documentExternalId 
     * @param {String} opts.created 
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/DocumentAttachmentsApi~documentAttachmentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.documentAttachmentsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'document__uuid': opts['documentUuid'],
        'document__external_id': opts['documentExternalId'],
        'created': opts['created'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/document-attachments/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the documentAttachmentsRead operation.
     * @callback module:api/DocumentAttachmentsApi~documentAttachmentsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Document Attachment
     * 
     * @param {String} uuid 
     * @param {module:api/DocumentAttachmentsApi~documentAttachmentsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentAttachment}
     */
    this.documentAttachmentsRead = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling documentAttachmentsRead");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentAttachment;

      return this.apiClient.callApi(
        '/document-attachments/{uuid}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
