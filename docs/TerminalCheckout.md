# SquareConnect.TerminalCheckout

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique ID for this &#x60;TerminalCheckout&#x60; | [optional] 
**amount_money** | [**Money**](Money.md) | The amount of money (including tax amount) that the Square Terminal device should try to collect. | 
**reference_id** | **String** | An optional user-defined reference ID which can be used to associate this TerminalCheckout to another entity in an external system. For example, an order ID generated by a third-party shopping cart. Will also be associated with any payments used to complete the checkout. | [optional] 
**note** | **String** | An optional note to associate with the checkout, as well any payments used to complete the checkout. | [optional] 
**device_options** | [**DeviceCheckoutOptions**](DeviceCheckoutOptions.md) | Options to control the display and behavior of the Square Terminal device. | 
**deadline_duration** | **String** | The duration as an RFC 3339 duration, after which the checkout will be automatically canceled. TerminalCheckouts that are PENDING will be automatically CANCELED and have a cancellation reason of “TIMED\\_OUT”.  Default: 5 minutes from creation  Maximum: 5 minutes | [optional] 
**status** | **String** | The status of the &#x60;TerminalCheckout&#x60;. Options: PENDING, IN\\_PROGRESS, CANCELED, COMPLETED | [optional] 
**cancel_reason** | **String** | Present if the status is CANCELED. See [TerminalCheckoutCancelReason](#type-terminalcheckoutcancelreason) for possible values | [optional] 
**payment_ids** | **[String]** | A list of payments created by this &#x60;TerminalCheckout&#x60;. | [optional] 
**created_at** | **String** | The time when the &#x60;TerminalCheckout&#x60; was created as an RFC 3339 timestamp. | [optional] 
**updated_at** | **String** | The time when the &#x60;TerminalCheckout&#x60; was last updated as an RFC 3339 timestamp. | [optional] 

