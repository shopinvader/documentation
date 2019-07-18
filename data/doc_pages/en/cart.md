`store.cart` is the current cart. This variable is only available after the add to cart action. `store.cart` allow cart lines with product data, shipping address, delivery mode, Cart object is stored and managed directly via odoo. 

To avoid performance problems, cart data are cached, each cart updating (add new product, set a shipping address…) refresh cached datas via an Odoo API call.

Each cart update recalculate grand total, subtotal, shipping cost and VAT amount automatically.

## Attributes


Attributes of store.cart object.

| Name | Type | Description |
|--------|--------|-------------|
| amount	| Object | Grand total and taxes, See Amout documentation
| available_for_quotation	| Boolean | Cart to quotation available
| date	| Datetime | The cart creation date
| id	| Integer | Cart ID
| invoicing	| Objects | Invoice address, see Invoicing doc
| lines	| Objects | Cart lines See Cart lines documentation
| name	| String | Cart reference
| payment | Objects | Payment method avaliable and selected method, see Select payment method doc
| promotion_rules_auto	| Objects | 
| promotion_rule_coupon	| Object | 
| shipping	| Objects | Shipping address, see Shipping doc
| state	| String | Odoo sale order status
| step	| Objects | Cart Step list, see Checkout step process doc

### Amout

Amout object provide cart Grand total and taxes amount.

| Name | Type | Description |
|--------|--------|-------------|
| discount_total | Float | Discount Total 
| tax | Float | VAT and other taxes total (Item and shipping cost included)
| tax_without_shipping | Float | Tax total without shipping cost 
| total | Float | Grand total (included taxes)
| total_without_discount | Float | Grand total without discount 
| total_without_shipping | Float  | Grand total without shipping cost 
| untaxed_without_shipping | Float | Untaxed total without shipping cost 
| untaxed	| Float | Total amount without taxes


### Shipping

Shipping object provide shipping customer address, selected carrier and shipping cost.

To get Delivery method avaliable.

| Name | Type | Description |
|--------|--------|-------------|


### Invoicing


## Methods


### Checkout step process

