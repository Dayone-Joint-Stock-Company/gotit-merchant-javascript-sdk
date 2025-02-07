const expect = require('expect.js');
const MerchantApis = require('../../src/index'); // Đường dẫn tùy vào cấu trúc project

describe('MerchantApiV60Api', function () {
  let instance;

  beforeEach(function () {
    instance = new MerchantApis.MerchantApiV60Api();
  });

  /**
   * Helper function to test API response
   */
  function validateResponse(response, expected) {
    expect(response).to.have.property('success');
    expect(response).to.have.property('return_code');
    expect(response).to.have.property('message_en');
    expect(response).to.have.property('message_vi');
    expect(response).to.have.property('data');

    if (expected && Object.keys(expected).length > 0) {
      expect(response.success).to.be(expected.success);
      expect(response.return_code).to.be(expected.return_code);
      expect(response.message_en).to.be(expected.message_en);
      expect(response.message_vi).to.be(expected.message_vi);
    }
  }

  /**
   * Prepare SKUs Info for API Request
   */
  function prepareSkusInfo(skusInfoRaw) {
    return skusInfoRaw.map(sku => ({
      sku: sku.sku,
      quantity: sku.quantity,
      price: sku.price
    }));
  }

  describe('checkMultiple', function () {
    checkMultipleDataProvider().forEach(testCase => {
      it(`should test checkMultiple with pin=${testCase[0]}`, function (done) {
        const [pin, codes, billNumber, skusInfo, expected] = testCase;
        var body = new MerchantApis.RequestCheckMultipleBodySchemaV60();

        body.pin = pin;
        body.codes = codes;
        body.bill_number = billNumber;
        body.skus_info = prepareSkusInfo(skusInfo);
        var opts = {
          'requestCheckMultipleBodySchemaV60': body
        };

        instance.checkMultiple(opts, function (error, data, response) {
          if (error) {
            console.error(error);
          } else {
            validateResponse(data, expected);
          }
          done();
        });
      });
    });
  });

  describe('reserved', function () {
    reservedDataProvider().forEach(testCase => {
      it(`should test reserved with pin=${testCase[0]}`, function (done) {
        const [pin, codes, billNumber, skusInfo, expected] = testCase;
        var body = new MerchantApis.RequestReservedBodySchemaV60();

        body.pin = pin;
        body.codes = codes;
        body.bill_number = billNumber;
        body.skus_info = prepareSkusInfo(skusInfo);
        var opts = {
          'requestReservedBodySchemaV60': body
        };

        instance.reserved(opts, function (error, data, response) {
          if (error) {
            console.error(error);
          } else {
            validateResponse(data, expected);
          }
          done();
        });
      });
    });
  });

  describe('unreserved', function () {
    unreservedDataProvider().forEach(testCase => {
      it(`should test unreserved with pin=${testCase[0]}`, function (done) {
        const [pin, codes, billNumber, skusInfo, expected] = testCase;
        var body = new MerchantApis.RequestUnReservedBodySchemaV60();

        body.pin = pin;
        body.codes = codes;
        body.bill_number = billNumber;
        body.skus_info = prepareSkusInfo(skusInfo);
        var opts = {
          'requestUnReservedBodySchemaV60': body
        };

        instance.unreserved(opts, function (error, data, response) {
          if (error) {
            console.error(error);
          } else {
            validateResponse(data, expected);
          }
          done();
        });
      });
    });
  });

  describe('useMultiple', function () {
    useMultipleDataProvider().forEach(testCase => {
      it(`should test useMultiple with pin=${testCase[0]}`, function (done) {
        const [pin, codes, billNumber, skusInfo, expected] = testCase;
        var body = new MerchantApis.RequestMarkUseMultipleBodySchemaV60();

        body.pin = pin;
        body.codes = codes;
        body.bill_number = billNumber;
        body.skus_info = prepareSkusInfo(skusInfo);
        var opts = {
          'requestMarkUseMultipleBodySchemaV60': body
        };

        instance.useMultiple(opts, function (error, data, response) {
          if (error) {
            console.error(error);
          } else {
            validateResponse(data, expected);
          }
          done();
        });
      });
    });
  });
});

/**
 * Data Providers (converted from PHP)
 */

function checkMultipleDataProvider() {
  return [
    // Test case 1: Data is okay
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}], {}],

    // Test case 2: Data pin is invalid
    ['12121212', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '200', 'message_en': 'Pin is incorrect.', 'message_vi': 'Mã pin không hợp lệ hoặc không đúng.', 'data': []}],

    // Test case 3: Data codes is duplicate
    ['4205', ['071717127083', '071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '231', 'message_en': 'Code is duplicate.', 'message_vi': 'Mã code bị trùng.', 'data': []}],

    // Test case 4: Data codes is invalid
    ['4205', ['0717171270831'], 'BILL0717171270831',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '203', 'message_en': 'Code is incorrect.', 'message_vi': 'Mã code không hợp lệ hoặc không đúng.', 'data': []}]

  ];
}

function reservedDataProvider() {
  return [
    // Test case 1: Data pin is invalid
    ['12121212', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '200', 'message_en': 'Pin is incorrect.', 'message_vi': 'Mã pin không hợp lệ hoặc không đúng.', 'data': []}],

    // Test case 2: Data codes is duplicate
    ['4205', ['071717127083', '071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '231', 'message_en': 'Code is duplicate.', 'message_vi': 'Mã code bị trùng.', 'data': []}],

    // Test case 3: Missing bill number
    ['4205', ['071717127083'], '',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '210', 'message_en': 'Please enter bill number.', 'message_vi': 'Vui lòng nhập mã hóa đơn.', 'data': []}],

    // Test case 4: Sku duplicated
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002275', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '242', 'message_en': 'Duplicate SKUs exist in the bill, please check again.', 'message_vi': 'SKU trong đơn hàng bị trùng, vui lòng kiểm tra lại.', 'data': []}],

    // Test case 4: SKU is invalid
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '1234567', 'quantity': 2, 'price': 100000},
        {'sku': '12345678', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '240', 'message_en': 'The SKU(s) applied are invalid.', 'message_vi': '(Các) SKU được áp dụng không hợp lệ.', 'data': []}],
  ];
}

function unreservedDataProvider() {
  return [
    // Test case 1: Data pin is invalid
    ['12121212', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '200', 'message_en': 'Pin is incorrect.', 'message_vi': 'Mã pin không hợp lệ hoặc không đúng.', 'data': []}],

    // Test case 2: Data codes is duplicate
    ['4205', ['071717127083', '071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '231', 'message_en': 'Code is duplicate.', 'message_vi': 'Mã code bị trùng.', 'data': []}],

    // Test case 3: Missing bill number
    ['4205', ['071717127083'], '',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '210', 'message_en': 'Please enter bill number.', 'message_vi': 'Vui lòng nhập mã hóa đơn.', 'data': []}],

    // Test case 4: Sku duplicated
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002275', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '242', 'message_en': 'Duplicate SKUs exist in the bill, please check again.', 'message_vi': 'SKU trong đơn hàng bị trùng, vui lòng kiểm tra lại.', 'data': []}],

    // Test case 4: SKU is invalid
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '1234567', 'quantity': 2, 'price': 100000},
        {'sku': '12345678', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '240', 'message_en': 'The SKU(s) applied are invalid.', 'message_vi': '(Các) SKU được áp dụng không hợp lệ.', 'data': []}],
  ];
}

function useMultipleDataProvider() {
  return [
    // Test case 1: Data pin is invalid
    ['12121212', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '200', 'message_en': 'Pin is incorrect.', 'message_vi': 'Mã pin không hợp lệ hoặc không đúng.', 'data': []}],

    // Test case 2: Data codes is duplicate
    ['4205', ['071717127083', '071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '231', 'message_en': 'Code is duplicate.', 'message_vi': 'Mã code bị trùng.', 'data': []}],

    // Test case 3: Missing bill number
    ['4205', ['071717127083'], '',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002980', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '210', 'message_en': 'Please enter bill number.', 'message_vi': 'Vui lòng nhập mã hóa đơn.', 'data': []}],

    // Test case 4: Sku duplicated
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '3002275', 'quantity': 2, 'price': 100000},
        {'sku': '3002275', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '242', 'message_en': 'Duplicate SKUs exist in the bill, please check again.', 'message_vi': 'SKU trong đơn hàng bị trùng, vui lòng kiểm tra lại.', 'data': []}],

    // Test case 4: SKU is invalid
    ['4205', ['071717127083'], 'BILL071717127083',
      [{'sku': '1234567', 'quantity': 2, 'price': 100000},
        {'sku': '12345678', 'quantity': 3, 'price': 100000}],
      {'success': false, 'return_code': '240', 'message_en': 'The SKU(s) applied are invalid.', 'message_vi': '(Các) SKU được áp dụng không hợp lệ.', 'data': []}],
  ];
}
