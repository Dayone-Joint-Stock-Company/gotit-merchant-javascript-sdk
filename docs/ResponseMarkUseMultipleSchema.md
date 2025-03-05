# MerchantApis.ResponseMarkUseMultipleSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **Boolean** |  | [optional] 
**returnCode** | **String** | Result code if failed. In case of successful request: value is null | [optional] 
**messageEn** | **String** | Message notification in English | [optional] 
**messageVi** | **String** | Message notification in Vietnamese | [optional] 
**data** | [**[ResponseMarkUseMultipleSchemaDataInner]**](ResponseMarkUseMultipleSchemaDataInner.md) | Detail items of voucher, if result is failed, response will return the first voucher code which is invalid | [optional] 
**transactionId** | **String** | Transaction ID (if mark used successfully) | [optional] 
**billNumber** | **String** | Bill number that vouchers were marked as used for. | [optional] 


