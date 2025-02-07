# MerchantApis.MerchantApiV60Api

All URIs are relative to *https://openapi-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkMultiple**](MerchantApiV60Api.md#checkMultiple) | **POST** /merchant/v6.0/checkmultiple | Check multiple vouchers are valid or not
[**reserved**](MerchantApiV60Api.md#reserved) | **POST** /merchant/v6.0/reserved | Reserved multiple vouchers for a fixed bill number.
[**unreserved**](MerchantApiV60Api.md#unreserved) | **POST** /merchant/v6.0/unreserved | Reserved multiple vouchers for a fixed bill number.
[**useMultiple**](MerchantApiV60Api.md#useMultiple) | **POST** /merchant/v6.0/usemultiple | Reserved multiple vouchers for a fixed bill number.



## checkMultiple

> ResponseCheckMultipleSchemaV60 checkMultiple(opts)

Check multiple vouchers are valid or not

Check multiple vouchers are valid or not

### Example

```javascript
import MerchantApis from 'merchant_apis';

let apiInstance = new MerchantApis.MerchantApiV60Api();
let opts = {
  'requestCheckMultipleBodySchemaV60': new MerchantApis.RequestCheckMultipleBodySchemaV60() // RequestCheckMultipleBodySchemaV60 | 
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
 **requestCheckMultipleBodySchemaV60** | [**RequestCheckMultipleBodySchemaV60**](RequestCheckMultipleBodySchemaV60.md)|  | [optional] 

### Return type

[**ResponseCheckMultipleSchemaV60**](ResponseCheckMultipleSchemaV60.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reserved

> ResponseReservedSchemaV60 reserved(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import MerchantApis from 'merchant_apis';

let apiInstance = new MerchantApis.MerchantApiV60Api();
let opts = {
  'requestReservedBodySchemaV60': new MerchantApis.RequestReservedBodySchemaV60() // RequestReservedBodySchemaV60 | 
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
 **requestReservedBodySchemaV60** | [**RequestReservedBodySchemaV60**](RequestReservedBodySchemaV60.md)|  | [optional] 

### Return type

[**ResponseReservedSchemaV60**](ResponseReservedSchemaV60.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unreserved

> ResponseUnReservedSchemaV60 unreserved(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import MerchantApis from 'merchant_apis';

let apiInstance = new MerchantApis.MerchantApiV60Api();
let opts = {
  'requestUnReservedBodySchemaV60': new MerchantApis.RequestUnReservedBodySchemaV60() // RequestUnReservedBodySchemaV60 | 
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
 **requestUnReservedBodySchemaV60** | [**RequestUnReservedBodySchemaV60**](RequestUnReservedBodySchemaV60.md)|  | [optional] 

### Return type

[**ResponseUnReservedSchemaV60**](ResponseUnReservedSchemaV60.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useMultiple

> ResponseMarkUseMultipleSchemaV60 useMultiple(opts)

Reserved multiple vouchers for a fixed bill number.

Reserved multiple vouchers for a fixed bill number.

### Example

```javascript
import MerchantApis from 'merchant_apis';

let apiInstance = new MerchantApis.MerchantApiV60Api();
let opts = {
  'requestMarkUseMultipleBodySchemaV60': new MerchantApis.RequestMarkUseMultipleBodySchemaV60() // RequestMarkUseMultipleBodySchemaV60 | 
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
 **requestMarkUseMultipleBodySchemaV60** | [**RequestMarkUseMultipleBodySchemaV60**](RequestMarkUseMultipleBodySchemaV60.md)|  | [optional] 

### Return type

[**ResponseMarkUseMultipleSchemaV60**](ResponseMarkUseMultipleSchemaV60.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

