# SquareConnect.ModelBreak

### Description

A record of an employee's break during a shift.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this object | [optional] 
**start_at** | **String** | RFC 3339; follows same timezone info as &#x60;Shift&#x60;. Precision up to the minute is respected; seconds are truncated. | 
**end_at** | **String** | RFC 3339; follows same timezone info as &#x60;Shift&#x60;. Precision up to the minute is respected; seconds are truncated. | [optional] 
**break_type_id** | **String** | The &#x60;BreakType&#x60; this &#x60;Break&#x60; was templated on. | 
**name** | **String** | A human-readable name. | 
**expected_duration** | **String** | Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break. | 
**is_paid** | **Boolean** | Whether this break counts towards time worked for compensation purposes. | 


