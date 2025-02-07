# MerchantApis.ResponseReservedSchemaV60DataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Voucher code | [optional] 
**voucherType** | **String** | Voucher type, standard or redeemable_sku | [optional] 
**skusConditionVi** | **String** | Voucher SKU terms and conditions description in Vietnamese | [optional] 
**skusConditionEn** | **String** | Voucher SKU terms and conditions description in English | [optional] 
**redeemSku** | [**ResponseCheckMultipleSchemaV60DataInnerRedeemSku**](ResponseCheckMultipleSchemaV60DataInnerRedeemSku.md) |  | [optional] 
**redeemableSkus** | **[String]** | List of redeemable SKUs of the voucher code. For voucher type &#x3D; redeemable_sku, bill number must contain at least 1 redeemable SKU of the voucher. | [optional] 


