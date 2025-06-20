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

import ApiClient from '../ApiClient';
import RequestCheckMultipleBodySchemaSkusInfoInner from './RequestCheckMultipleBodySchemaSkusInfoInner';

/**
 * The RequestMarkUseMultipleBodySchema model module.
 * @module model/RequestMarkUseMultipleBodySchema
 * @version 1.0.2
 */
class RequestMarkUseMultipleBodySchema {
    /**
     * Constructs a new <code>RequestMarkUseMultipleBodySchema</code>.
     * @alias module:model/RequestMarkUseMultipleBodySchema
     */
    constructor() { 
        
        RequestMarkUseMultipleBodySchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestMarkUseMultipleBodySchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestMarkUseMultipleBodySchema} obj Optional instance to populate.
     * @return {module:model/RequestMarkUseMultipleBodySchema} The populated <code>RequestMarkUseMultipleBodySchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestMarkUseMultipleBodySchema();

            if (data.hasOwnProperty('pin')) {
                obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
            }
            if (data.hasOwnProperty('codes')) {
                obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
            }
            if (data.hasOwnProperty('bill_number')) {
                obj['bill_number'] = ApiClient.convertToType(data['bill_number'], 'String');
            }
            if (data.hasOwnProperty('total_bill')) {
                obj['total_bill'] = ApiClient.convertToType(data['total_bill'], 'Number');
            }
            if (data.hasOwnProperty('skip_reserved_when_mark_used')) {
                obj['skip_reserved_when_mark_used'] = ApiClient.convertToType(data['skip_reserved_when_mark_used'], 'Boolean');
            }
            if (data.hasOwnProperty('skus_info')) {
                obj['skus_info'] = ApiClient.convertToType(data['skus_info'], [RequestCheckMultipleBodySchemaSkusInfoInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RequestMarkUseMultipleBodySchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequestMarkUseMultipleBodySchema</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pin'] && !(typeof data['pin'] === 'string' || data['pin'] instanceof String)) {
            throw new Error("Expected the field `pin` to be a primitive type in the JSON string but got " + data['pin']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['codes'])) {
            throw new Error("Expected the field `codes` to be an array in the JSON data but got " + data['codes']);
        }
        // ensure the json data is a string
        if (data['bill_number'] && !(typeof data['bill_number'] === 'string' || data['bill_number'] instanceof String)) {
            throw new Error("Expected the field `bill_number` to be a primitive type in the JSON string but got " + data['bill_number']);
        }
        if (data['skus_info']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['skus_info'])) {
                throw new Error("Expected the field `skus_info` to be an array in the JSON data but got " + data['skus_info']);
            }
            // validate the optional field `skus_info` (array)
            for (const item of data['skus_info']) {
                RequestCheckMultipleBodySchemaSkusInfoInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Store pin
 * @member {String} pin
 */
RequestMarkUseMultipleBodySchema.prototype['pin'] = undefined;

/**
 * Array of 10-16 characters Got It voucher codes
 * @member {Array.<String>} codes
 */
RequestMarkUseMultipleBodySchema.prototype['codes'] = undefined;

/**
 * Bill number will apply vouchers
 * @member {String} bill_number
 */
RequestMarkUseMultipleBodySchema.prototype['bill_number'] = undefined;

/**
 * Total bill amount
 * @member {Number} total_bill
 */
RequestMarkUseMultipleBodySchema.prototype['total_bill'] = undefined;

/**
 * When true the system will execute the flow without reserve
 * @member {Boolean} skip_reserved_when_mark_used
 */
RequestMarkUseMultipleBodySchema.prototype['skip_reserved_when_mark_used'] = undefined;

/**
 * SKU information in bill_number
 * @member {Array.<module:model/RequestCheckMultipleBodySchemaSkusInfoInner>} skus_info
 */
RequestMarkUseMultipleBodySchema.prototype['skus_info'] = undefined;






export default RequestMarkUseMultipleBodySchema;

