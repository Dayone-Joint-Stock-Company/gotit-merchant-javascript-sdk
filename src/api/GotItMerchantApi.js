/**
 * Merchant APIs
 * Technical document APIs for Merchant APIs
 *
 * The version of the OpenAPI document: 6.0
 * Contact: duong.vu@gotit.vn
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RequestCheckMultipleBodySchema from '../model/RequestCheckMultipleBodySchema';
import RequestMarkUseMultipleBodySchema from '../model/RequestMarkUseMultipleBodySchema';
import RequestReservedBodySchema from '../model/RequestReservedBodySchema';
import RequestUnReservedBodySchema from '../model/RequestUnReservedBodySchema';
import ResponseCheckMultipleSchema from '../model/ResponseCheckMultipleSchema';
import ResponseMarkUseMultipleSchema from '../model/ResponseMarkUseMultipleSchema';
import ResponseReservedSchema from '../model/ResponseReservedSchema';
import ResponseUnReservedSchema from '../model/ResponseUnReservedSchema';

/**
* GotItMerchant service.
* @module api/GotItMerchantApi
* @version 1.0.2
*/
export default class GotItMerchantApi {

    /**
    * Constructs a new GotItMerchantApi. 
    * @alias module:api/GotItMerchantApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the checkMultiple operation.
     * @callback module:api/GotItMerchantApi~checkMultipleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCheckMultipleSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check multiple vouchers are valid or not
     * Check multiple vouchers are valid or not
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestCheckMultipleBodySchema} [requestCheckMultipleBodySchema] 
     * @param {module:api/GotItMerchantApi~checkMultipleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCheckMultipleSchema}
     */
    checkMultiple(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestCheckMultipleBodySchema'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseCheckMultipleSchema;
      return this.apiClient.callApi(
        '/merchant/v6.0/checkmultiple', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reserved operation.
     * @callback module:api/GotItMerchantApi~reservedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseReservedSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved multiple vouchers for a fixed bill number.
     * Reserved multiple vouchers for a fixed bill number.
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestReservedBodySchema} [requestReservedBodySchema] 
     * @param {module:api/GotItMerchantApi~reservedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseReservedSchema}
     */
    reserved(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestReservedBodySchema'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseReservedSchema;
      return this.apiClient.callApi(
        '/merchant/v6.0/reserved', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unreserved operation.
     * @callback module:api/GotItMerchantApi~unreservedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseUnReservedSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved multiple vouchers for a fixed bill number.
     * Reserved multiple vouchers for a fixed bill number.
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestUnReservedBodySchema} [requestUnReservedBodySchema] 
     * @param {module:api/GotItMerchantApi~unreservedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseUnReservedSchema}
     */
    unreserved(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestUnReservedBodySchema'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseUnReservedSchema;
      return this.apiClient.callApi(
        '/merchant/v6.0/unreserved', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the useMultiple operation.
     * @callback module:api/GotItMerchantApi~useMultipleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseMarkUseMultipleSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved multiple vouchers for a fixed bill number.
     * Reserved multiple vouchers for a fixed bill number.
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestMarkUseMultipleBodySchema} [requestMarkUseMultipleBodySchema] 
     * @param {module:api/GotItMerchantApi~useMultipleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseMarkUseMultipleSchema}
     */
    useMultiple(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestMarkUseMultipleBodySchema'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseMarkUseMultipleSchema;
      return this.apiClient.callApi(
        '/merchant/v6.0/usemultiple', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
