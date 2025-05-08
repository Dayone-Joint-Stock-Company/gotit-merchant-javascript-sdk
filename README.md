# GotIt Merchant SDK
SDK Technical document for Merchant APIs

## Installation & Usage
#### git

```shell
npm install Dayone-Joint-Stock-Company/gotit-merchant-javascript-sdk --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `SDK_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `SDK_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your merchant_apis from, and run:

```shell
npm link /path/to/<SDK_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GotItMerchantSDK = require('gotit-merchant-javascript-sdk');

let apiClient = new GotItMerchantSDK.ApiClient("https://openapi-stg.gotit.vn");
var api = new GotItMerchantSDK.GotItMerchantApi(apiClient)
var body = new GotItMerchantSDK.RequestCheckMultipleBodySchema();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

body.pin = '1212';
body.codes = ["055854881234", "6167941234"];
body.bill_number = 'BILL055854881234';
body.skus_info = [
    {
        "sku": "SKU001",
        "quantity": 1,
        "price": 100000
    }
];
var opts = {
    'requestCheckMultipleBodySchema': body
};

api.checkMultiple(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://openapi-stg.gotit.vn*. For production please change to *https://openapi.gotit.vn*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GotItMerchantSDK.GotItMerchantApi* | [**checkMultiple**](docs/GotItMerchantApi.md#checkMultiple) | **POST** /merchant/v6.0/checkmultiple | Check multiple vouchers are valid or not
*GotItMerchantSDK.GotItMerchantApi* | [**reserved**](docs/GotItMerchantApi.md#reserved) | **POST** /merchant/v6.0/reserved | Reserved multiple vouchers for a fixed bill number.
*GotItMerchantSDK.GotItMerchantApi* | [**unreserved**](docs/GotItMerchantApi.md#unreserved) | **POST** /merchant/v6.0/unreserved | Reserved multiple vouchers for a fixed bill number.
*GotItMerchantSDK.GotItMerchantApi* | [**useMultiple**](docs/GotItMerchantApi.md#useMultiple) | **POST** /merchant/v6.0/usemultiple | Reserved multiple vouchers for a fixed bill number.


## Documentation for Models

- [GotItMerchantSDK.RequestCheckMultipleBodySchema](docs/RequestCheckMultipleBodySchema.md)
- [GotItMerchantSDK.RequestCheckMultipleBodySchemaSkusInfoInner](docs/RequestCheckMultipleBodySchemaSkusInfoInner.md)
- [GotItMerchantSDK.RequestMarkUseMultipleBodySchema](docs/RequestMarkUseMultipleBodySchema.md)
- [GotItMerchantSDK.RequestReservedBodySchema](docs/RequestReservedBodySchema.md)
- [GotItMerchantSDK.RequestUnReservedBodySchema](docs/RequestUnReservedBodySchema.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchema](docs/ResponseCheckMultipleSchema.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchemaDataInner](docs/ResponseCheckMultipleSchemaDataInner.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchemaDataInnerConditions](docs/ResponseCheckMultipleSchemaDataInnerConditions.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchemaDataInnerRedemptions](docs/ResponseCheckMultipleSchemaDataInnerRedemptions.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchemaDataInnerRedemptionsRedeemSkuCodesInner](docs/ResponseCheckMultipleSchemaDataInnerRedemptionsRedeemSkuCodesInner.md)
- [GotItMerchantSDK.ResponseCheckMultipleSchemaDataInnerRedemptionsUsedStore](docs/ResponseCheckMultipleSchemaDataInnerRedemptionsUsedStore.md)
- [GotItMerchantSDK.ResponseMarkUseMultipleSchema](docs/ResponseMarkUseMultipleSchema.md)
- [GotItMerchantSDK.ResponseMarkUseMultipleSchemaDataInner](docs/ResponseMarkUseMultipleSchemaDataInner.md)
- [GotItMerchantSDK.ResponseMarkUseMultipleSchemaDataInnerConditions](docs/ResponseMarkUseMultipleSchemaDataInnerConditions.md)
- [GotItMerchantSDK.ResponseMarkUseMultipleSchemaDataInnerRedemptions](docs/ResponseMarkUseMultipleSchemaDataInnerRedemptions.md)
- [GotItMerchantSDK.ResponseReservedSchema](docs/ResponseReservedSchema.md)
- [GotItMerchantSDK.ResponseReservedSchemaDataInner](docs/ResponseReservedSchemaDataInner.md)
- [GotItMerchantSDK.ResponseReservedSchemaDataInnerRedemptions](docs/ResponseReservedSchemaDataInnerRedemptions.md)
- [GotItMerchantSDK.ResponseReservedSchemaUsedStore](docs/ResponseReservedSchemaUsedStore.md)
- [GotItMerchantSDK.ResponseUnReservedSchema](docs/ResponseUnReservedSchema.md)
- [GotItMerchantSDK.ResponseUnReservedSchemaDataInner](docs/ResponseUnReservedSchemaDataInner.md)


## Documentation for Authorization

Endpoints do not require authorization.