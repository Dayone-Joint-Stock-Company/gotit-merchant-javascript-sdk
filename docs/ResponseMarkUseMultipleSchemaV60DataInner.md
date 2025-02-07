# MerchantApis.ResponseMarkUseMultipleSchemaV60DataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Voucher code | [optional] 
**product** | [**ResponseCheckMultipleSchemaV60DataInnerProduct**](ResponseCheckMultipleSchemaV60DataInnerProduct.md) |  | [optional] 
**state** | **Number** | State of voucher | [optional] 
**usedDate** | **String** | Date voucher marked as used in case the voucher has been redeemed. Format (YYYY-MM-DD HH:MM:SS) | [optional] 
**usedStore** | [**ResponseMarkUseMultipleSchemaV60DataInnerUsedStore**](ResponseMarkUseMultipleSchemaV60DataInnerUsedStore.md) |  | [optional] 
**voucherType** | **String** | Voucher type, standard or redeemable_sku | [optional] 
**skusConditionVi** | **String** | Voucher SKU terms and conditions description in Vietnamese | [optional] 
**skusConditionEn** | **String** | Voucher SKU terms and conditions description in English | [optional] 
**redeemSku** | [**ResponseCheckMultipleSchemaV60DataInnerRedeemSku**](ResponseCheckMultipleSchemaV60DataInnerRedeemSku.md) |  | [optional] 
**redeemableSkus** | **[String]** | List of redeemable SKUs of the voucher code. For voucher type &#x3D; redeemable_sku, bill number must contain at least 1 redeemable SKU of the voucher. | [optional] 


