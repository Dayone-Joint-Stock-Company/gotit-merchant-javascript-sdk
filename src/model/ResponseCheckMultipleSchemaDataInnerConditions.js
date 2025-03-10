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

/**
 * The ResponseCheckMultipleSchemaDataInnerConditions model module.
 * @module model/ResponseCheckMultipleSchemaDataInnerConditions
 * @version 6.0
 */
class ResponseCheckMultipleSchemaDataInnerConditions {
    /**
     * Constructs a new <code>ResponseCheckMultipleSchemaDataInnerConditions</code>.
     * Include information involve with voucher type is conditional
     * @alias module:model/ResponseCheckMultipleSchemaDataInnerConditions
     */
    constructor() { 
        
        ResponseCheckMultipleSchemaDataInnerConditions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseCheckMultipleSchemaDataInnerConditions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCheckMultipleSchemaDataInnerConditions} obj Optional instance to populate.
     * @return {module:model/ResponseCheckMultipleSchemaDataInnerConditions} The populated <code>ResponseCheckMultipleSchemaDataInnerConditions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCheckMultipleSchemaDataInnerConditions();

            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
            }
            if (data.hasOwnProperty('exclude_specific_date')) {
                obj['exclude_specific_date'] = ApiClient.convertToType(data['exclude_specific_date'], ['String']);
            }
            if (data.hasOwnProperty('exclude_recurring_day')) {
                obj['exclude_recurring_day'] = ApiClient.convertToType(data['exclude_recurring_day'], ['String']);
            }
            if (data.hasOwnProperty('redeemable_skus')) {
                obj['redeemable_skus'] = ApiClient.convertToType(data['redeemable_skus'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseCheckMultipleSchemaDataInnerConditions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseCheckMultipleSchemaDataInnerConditions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['start_date'] && !(typeof data['start_date'] === 'string' || data['start_date'] instanceof String)) {
            throw new Error("Expected the field `start_date` to be a primitive type in the JSON string but got " + data['start_date']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['exclude_specific_date'])) {
            throw new Error("Expected the field `exclude_specific_date` to be an array in the JSON data but got " + data['exclude_specific_date']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['exclude_recurring_day'])) {
            throw new Error("Expected the field `exclude_recurring_day` to be an array in the JSON data but got " + data['exclude_recurring_day']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['redeemable_skus'])) {
            throw new Error("Expected the field `redeemable_skus` to be an array in the JSON data but got " + data['redeemable_skus']);
        }

        return true;
    }


}



/**
 * Promo start date (YYYY-MM-DD)
 * @member {String} start_date
 */
ResponseCheckMultipleSchemaDataInnerConditions.prototype['start_date'] = undefined;

/**
 * Promo non-effective dates (YYYY-MM-DD)
 * @member {Array.<String>} exclude_specific_date
 */
ResponseCheckMultipleSchemaDataInnerConditions.prototype['exclude_specific_date'] = undefined;

/**
 * Promo non-effective day of week
 * @member {Array.<String>} exclude_recurring_day
 */
ResponseCheckMultipleSchemaDataInnerConditions.prototype['exclude_recurring_day'] = undefined;

/**
 * List of redeemable SKUs of the voucher code. For voucher type = conditional, bill number must contain at least 1 redeemable SKU of the voucher.
 * @member {Array.<String>} redeemable_skus
 */
ResponseCheckMultipleSchemaDataInnerConditions.prototype['redeemable_skus'] = undefined;






export default ResponseCheckMultipleSchemaDataInnerConditions;

