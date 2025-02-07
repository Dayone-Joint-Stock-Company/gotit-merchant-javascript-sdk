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
 * The ResponseMarkUseMultipleSchemaV60DataInnerUsedStore model module.
 * @module model/ResponseMarkUseMultipleSchemaV60DataInnerUsedStore
 * @version 6.0
 */
class ResponseMarkUseMultipleSchemaV60DataInnerUsedStore {
    /**
     * Constructs a new <code>ResponseMarkUseMultipleSchemaV60DataInnerUsedStore</code>.
     * @alias module:model/ResponseMarkUseMultipleSchemaV60DataInnerUsedStore
     */
    constructor() { 
        
        ResponseMarkUseMultipleSchemaV60DataInnerUsedStore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseMarkUseMultipleSchemaV60DataInnerUsedStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseMarkUseMultipleSchemaV60DataInnerUsedStore} obj Optional instance to populate.
     * @return {module:model/ResponseMarkUseMultipleSchemaV60DataInnerUsedStore} The populated <code>ResponseMarkUseMultipleSchemaV60DataInnerUsedStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseMarkUseMultipleSchemaV60DataInnerUsedStore();

            if (data.hasOwnProperty('name_vi')) {
                obj['name_vi'] = ApiClient.convertToType(data['name_vi'], 'String');
            }
            if (data.hasOwnProperty('name_en')) {
                obj['name_en'] = ApiClient.convertToType(data['name_en'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseMarkUseMultipleSchemaV60DataInnerUsedStore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseMarkUseMultipleSchemaV60DataInnerUsedStore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name_vi'] && !(typeof data['name_vi'] === 'string' || data['name_vi'] instanceof String)) {
            throw new Error("Expected the field `name_vi` to be a primitive type in the JSON string but got " + data['name_vi']);
        }
        // ensure the json data is a string
        if (data['name_en'] && !(typeof data['name_en'] === 'string' || data['name_en'] instanceof String)) {
            throw new Error("Expected the field `name_en` to be a primitive type in the JSON string but got " + data['name_en']);
        }

        return true;
    }


}



/**
 * Store name in Vietnamese
 * @member {String} name_vi
 */
ResponseMarkUseMultipleSchemaV60DataInnerUsedStore.prototype['name_vi'] = undefined;

/**
 * Store name in English
 * @member {String} name_en
 */
ResponseMarkUseMultipleSchemaV60DataInnerUsedStore.prototype['name_en'] = undefined;






export default ResponseMarkUseMultipleSchemaV60DataInnerUsedStore;

