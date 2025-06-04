# GotItMerchantSDK.GotItMerchantApi

All URIs are relative to *https://openapi-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkMultiple**](GotItMerchantApi.md#checkMultiple) | **POST** /merchant/v6.0/checkmultiple | Check multiple vouchers are valid or not
[**reserved**](GotItMerchantApi.md#reserved) | **POST** /merchant/v6.0/reserved | Reserved multiple vouchers for a fixed bill number.
[**unreserved**](GotItMerchantApi.md#unreserved) | **POST** /merchant/v6.0/unreserved | Reserved multiple vouchers for a fixed bill number.
[**useMultiple**](GotItMerchantApi.md#useMultiple) | **POST** /merchant/v6.0/usemultiple | Reserved multiple vouchers for a fixed bill number.



## checkMultiple

> ResponseCheckMultipleSchema checkMultiple(opts)

Check multiple vouchers are valid or not

Check multiple vouchers are valid or not

### Example

```javascript
import GotItMerchantSDK from 'gotit-merchant-sdk';

let apiInstance = new GotItMerchantSDK.GotItMerchantApi();
let opts = {
  'requestCheckMultipleBodySchema': new GotItMerchantSDK.RequestCheckMultipleBodySchema() // RequestCheckMultipleBodySchema | 
};
apiInstance.checkMultiple(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestCheckMultipleBodySchema** | [**RequestCheckMultipleBodySchema**](RequestCheckMultipleBodySchema.md)|  | [optional] 

### Return type

[**ResponseCheckMultipleSchema**](ResponseCheckMultipleSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reserved

> ResponseReservedSchema reserved(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import GotItMerchantSDK from 'gotit-merchant-sdk';

let apiInstance = new GotItMerchantSDK.GotItMerchantApi();
let opts = {
  'requestReservedBodySchema': new GotItMerchantSDK.RequestReservedBodySchema() // RequestReservedBodySchema | 
};
apiInstance.reserved(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestReservedBodySchema** | [**RequestReservedBodySchema**](RequestReservedBodySchema.md)|  | [optional] 

### Return type

[**ResponseReservedSchema**](ResponseReservedSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unreserved

> ResponseUnReservedSchema unreserved(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import GotItMerchantSDK from 'gotit-merchant-sdk';

let apiInstance = new GotItMerchantSDK.GotItMerchantApi();
let opts = {
  'requestUnReservedBodySchema': new GotItMerchantSDK.RequestUnReservedBodySchema() // RequestUnReservedBodySchema | 
};
apiInstance.unreserved(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestUnReservedBodySchema** | [**RequestUnReservedBodySchema**](RequestUnReservedBodySchema.md)|  | [optional] 

### Return type

[**ResponseUnReservedSchema**](ResponseUnReservedSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useMultiple

> ResponseMarkUseMultipleSchema useMultiple(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import GotItMerchantSDK from 'gotit-merchant-sdk';

let apiInstance = new GotItMerchantSDK.GotItMerchantApi();
let opts = {
  'requestMarkUseMultipleBodySchema': new GotItMerchantSDK.RequestMarkUseMultipleBodySchema() // RequestMarkUseMultipleBodySchema | 
};
apiInstance.useMultiple(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestMarkUseMultipleBodySchema** | [**RequestMarkUseMultipleBodySchema**](RequestMarkUseMultipleBodySchema.md)|  | [optional] 

### Return type

[**ResponseMarkUseMultipleSchema**](ResponseMarkUseMultipleSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

