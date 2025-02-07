# MerchantApis.RequestMarkUseMultipleBodySchemaV60

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pin** | **String** | Store pin | [optional] 
**codes** | **[String]** | Array of 10-16 characters Got It voucher codes | [optional] 
**billNumber** | **String** | Bill number will apply vouchers | [optional] 
**skipReservedWhenMarkUsed** | **Boolean** | When true the system will execute the flow without reserve | [optional] 
**skusInfo** | [**[RequestCheckMultipleBodySchemaV60SkusInfoInner]**](RequestCheckMultipleBodySchemaV60SkusInfoInner.md) | SKU information in bill_number | [optional] 


