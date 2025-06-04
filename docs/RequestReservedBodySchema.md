# GotItMerchantSDK.RequestReservedBodySchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pin** | **String** | Store pin | [optional] 
**codes** | **[String]** | Array of 10-16 characters Got It voucher codes | [optional] 
**billNumber** | **String** | Bill number will apply vouchers | [optional] 
**totalBill** | **Number** | Total bill amount | [optional] 
**billCreatedAt** | **String** | Bill creation time. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**skusInfo** | [**[RequestCheckMultipleBodySchemaSkusInfoInner]**](RequestCheckMultipleBodySchemaSkusInfoInner.md) | SKU information in bill_number | [optional] 


