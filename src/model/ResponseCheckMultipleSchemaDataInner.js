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
import ResponseCheckMultipleSchemaDataInnerConditions from './ResponseCheckMultipleSchemaDataInnerConditions';
import ResponseCheckMultipleSchemaDataInnerRedemptions from './ResponseCheckMultipleSchemaDataInnerRedemptions';

/**
 * The ResponseCheckMultipleSchemaDataInner model module.
 * @module model/ResponseCheckMultipleSchemaDataInner
 * @version 6.0
 */
class ResponseCheckMultipleSchemaDataInner {
    /**
     * Constructs a new <code>ResponseCheckMultipleSchemaDataInner</code>.
     * @alias module:model/ResponseCheckMultipleSchemaDataInner
     */
    constructor() { 
        
        ResponseCheckMultipleSchemaDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseCheckMultipleSchemaDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCheckMultipleSchemaDataInner} obj Optional instance to populate.
     * @return {module:model/ResponseCheckMultipleSchemaDataInner} The populated <code>ResponseCheckMultipleSchemaDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCheckMultipleSchemaDataInner();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'Number');
            }
            if (data.hasOwnProperty('voucher_type')) {
                obj['voucher_type'] = ApiClient.convertToType(data['voucher_type'], 'String');
            }
            if (data.hasOwnProperty('expiry_date')) {
                obj['expiry_date'] = ApiClient.convertToType(data['expiry_date'], 'String');
            }
            if (data.hasOwnProperty('cancel_date')) {
                obj['cancel_date'] = ApiClient.convertToType(data['cancel_date'], 'String');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ResponseCheckMultipleSchemaDataInnerConditions.constructFromObject(data['conditions']);
            }
            if (data.hasOwnProperty('redemptions')) {
                obj['redemptions'] = ResponseCheckMultipleSchemaDataInnerRedemptions.constructFromObject(data['redemptions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseCheckMultipleSchemaDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseCheckMultipleSchemaDataInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['voucher_type'] && !(typeof data['voucher_type'] === 'string' || data['voucher_type'] instanceof String)) {
            throw new Error("Expected the field `voucher_type` to be a primitive type in the JSON string but got " + data['voucher_type']);
        }
        // ensure the json data is a string
        if (data['expiry_date'] && !(typeof data['expiry_date'] === 'string' || data['expiry_date'] instanceof String)) {
            throw new Error("Expected the field `expiry_date` to be a primitive type in the JSON string but got " + data['expiry_date']);
        }
        // ensure the json data is a string
        if (data['cancel_date'] && !(typeof data['cancel_date'] === 'string' || data['cancel_date'] instanceof String)) {
            throw new Error("Expected the field `cancel_date` to be a primitive type in the JSON string but got " + data['cancel_date']);
        }
        // validate the optional field `conditions`
        if (data['conditions']) { // data not null
          ResponseCheckMultipleSchemaDataInnerConditions.validateJSON(data['conditions']);
        }
        // validate the optional field `redemptions`
        if (data['redemptions']) { // data not null
          ResponseCheckMultipleSchemaDataInnerRedemptions.validateJSON(data['redemptions']);
        }

        return true;
    }


}



/**
 * Voucher code
 * @member {String} code
 */
ResponseCheckMultipleSchemaDataInner.prototype['code'] = undefined;

/**
 * Value of voucher
 * @member {Number} value
 */
ResponseCheckMultipleSchemaDataInner.prototype['value'] = undefined;

/**
 * State of voucher
 * @member {Number} state
 */
ResponseCheckMultipleSchemaDataInner.prototype['state'] = undefined;

/**
 * Voucher type, standard or conditional
 * @member {String} voucher_type
 */
ResponseCheckMultipleSchemaDataInner.prototype['voucher_type'] = undefined;

/**
 * Expiry date of voucher (YYYY-MM-DD)
 * @member {String} expiry_date
 */
ResponseCheckMultipleSchemaDataInner.prototype['expiry_date'] = undefined;

/**
 * Date cancel voucher (YYYY-MM-DD)
 * @member {String} cancel_date
 */
ResponseCheckMultipleSchemaDataInner.prototype['cancel_date'] = undefined;

/**
 * @member {module:model/ResponseCheckMultipleSchemaDataInnerConditions} conditions
 */
ResponseCheckMultipleSchemaDataInner.prototype['conditions'] = undefined;

/**
 * @member {module:model/ResponseCheckMultipleSchemaDataInnerRedemptions} redemptions
 */
ResponseCheckMultipleSchemaDataInner.prototype['redemptions'] = undefined;






export default ResponseCheckMultipleSchemaDataInner;

