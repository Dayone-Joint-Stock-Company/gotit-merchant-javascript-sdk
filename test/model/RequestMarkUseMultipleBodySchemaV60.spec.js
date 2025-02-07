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
    instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
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

  describe('RequestMarkUseMultipleBodySchemaV60', function() {
    it('should create an instance of RequestMarkUseMultipleBodySchemaV60', function() {
      // uncomment below and update the code to test RequestMarkUseMultipleBodySchemaV60
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be.a(MerchantApis.RequestMarkUseMultipleBodySchemaV60);
    });

    it('should have the property pin (base name: "pin")', function() {
      // uncomment below and update the code to test the property pin
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be();
    });

    it('should have the property codes (base name: "codes")', function() {
      // uncomment below and update the code to test the property codes
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be();
    });

    it('should have the property billNumber (base name: "bill_number")', function() {
      // uncomment below and update the code to test the property billNumber
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be();
    });

    it('should have the property skipReservedWhenMarkUsed (base name: "skip_reserved_when_mark_used")', function() {
      // uncomment below and update the code to test the property skipReservedWhenMarkUsed
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be();
    });

    it('should have the property skusInfo (base name: "skus_info")', function() {
      // uncomment below and update the code to test the property skusInfo
      //var instance = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();
      //expect(instance).to.be();
    });

  });

}));
