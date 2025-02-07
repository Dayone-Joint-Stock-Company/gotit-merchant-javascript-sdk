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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MerchantApis);
  }
}(this, function(expect, MerchantApis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner();
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

  describe('ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner', function() {
    it('should create an instance of ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner', function() {
      // uncomment below and update the code to test ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner
      //var instance = new MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner();
      //expect(instance).to.be.a(MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner);
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instance = new MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new MerchantApis.ResponseCheckMultipleSchemaV60DataInnerRedeemSkuRedeemSkuCodesInner();
      //expect(instance).to.be();
    });

  });

}));
