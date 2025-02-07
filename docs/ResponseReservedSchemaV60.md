# MerchantApis.ResponseReservedSchemaV60

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **Boolean** |  | [optional] 
**returnCode** | **String** | Result code if failed. Default is null | [optional] 
**messageEn** | **String** | Message notification in English | [optional] 
**messageVi** | **String** | Message notification in Vietnamese | [optional] 
**usedStore** | [**ResponseReservedSchemaV60UsedStore**](ResponseReservedSchemaV60UsedStore.md) |  | [optional] 
**billNumber** | **String** | Bill number | [optional] 
**data** | [**[ResponseReservedSchemaV60DataInner]**](ResponseReservedSchemaV60DataInner.md) | Detail items of voucher, if result is failed, response will return the first voucher code which is invalid | [optional] 


