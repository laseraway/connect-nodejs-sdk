# SquareConnect.V1ModifierOption

### Description
**Note: This model is deprecated.**

V1ModifierOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The modifier option&#39;s unique ID. | [optional] 
**name** | **String** | The modifier option&#39;s name. | [optional] 
**price_money** | [**V1Money**](V1Money.md) | The modifier option&#39;s price. | [optional] 
**on_by_default** | **Boolean** | If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE. | [optional] 
**ordinal** | **Number** | Indicates the modifier option&#39;s list position when displayed in Square Point of Sale and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order. | [optional] 
**modifier_list_id** | **String** | The ID of the modifier list the option belongs to. | [optional] 
**v2_id** | **String** | The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. | [optional] 


