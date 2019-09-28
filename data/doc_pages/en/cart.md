`store.cart` is the current cart. This variable is only available after the add to cart action. `store.cart` allow cart lines with product data, shipping address, delivery mode, Cart object is stored and managed directly via odoo. 

To avoid performance problems, cart data are cached, each cart updating (add new product, set a shipping address…) refresh cached datas via an Odoo API call.

Each cart update recalculate grand total, subtotal, shipping cost and VAT amount automatically.


## Attributes


Attributes of store.cart object.

| Name | Type | Description |
|--------|--------|-------------|
| amount  | Object | Grand total and taxes, See Amout documentation
| available_for_quotation  | Boolean | Cart to quotation available
| date  | Datetime | The cart creation date
| id  | Integer | Cart ID
| invoicing  | Objects | Invoice address, see Invoicing doc
| lines  | Objects | Cart lines See Cart lines documentation
| name  | String | Cart reference
| payment | Objects | Payment method avaliable and selected method, see Select payment method doc
| promotion_rules_auto  | Objects | 
| promotion_rule_coupon  | Object | 
| shipping  | Objects | Shipping address, see Shipping doc
| state  | String | ERP sale order status
| step  | Objects | Cart Step list, see Checkout step process doc


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
| untaxed  | Float | Total amount without taxes


### Shipping

Shipping customer address, selected carrier and shipping cost.


| Name | Type | Description |
|--------|--------|-------------|
| amount | Objects | Object with shippings cost taxed and without VAT |
| selected_carrier | Objects | Current selected carrier |
| address | Objects | Customer shipping address |


> Make an API request to cart/get_delivery_methods to get available carrier list according to delivery area.
>
> **Selected_carrier** and **amount** are set only after call cart/apply_delivery_method API method

### Invoicing

Invoicing customer address, selected carrier and shipping cost.

| Name | Type | Description |
|--------|--------|-------------|
| address | Objects | Customer invoicing address |


### Lines

This attribute is a collection of cart lines. 
Line object have two nested attributes :

| Name | Type | Description |
|--------|--------|-------------|
| count | Integer | product count in cart |
| items | Objects | items added in the cart |



**Item object**

Item object containing product data and quantity.

| Name | Type | Description |
|--------|--------|-------------|
| amount | Object | Object with product price taxed and without VAT  |
| product | Objects | simplified product object with ID, SKU, images, name, short_name, URL, model name |
| discount | Object | Object with discount rate and discount price  |


### Payment

Payment cart attribute.

| Name | Type | Description |
|--------|--------|-------------|
| selected_method | Object | selected payment method by the customer  |
| amount | Float | grand total  |
| selected_method | Objects | List of all available payment method  |

## Methods

### [POST] cart/update

Update cart data. This method is used to change shipping or invoicing address, add note, set a new cart step.
cart step is used to get cart feedback for marchant cart analysis. It's also used to transform a cart into an order after the checkout.

#### Options

| Name | Type | Description |
|--------|--------|-------------|
| step.current | String | current cart step  |
| step.next | String | New cart step  |
| shipping.address.id | Integer | Id of selected shipping address, optionnal value. See Addresses Documentation to get customer addresses list  |
| invoicing.address.id | Integer | Id of selected invoicing address, optionnal value. See Addresses Documentation to get customer addresses list  |

invoicing.address.id and shipping.address.id are not required values.


#### Example

Cart update via simple HTML form. 
This example is a form to set a shipping address in the cart. 
Setting a shipping address is necessary to make API calls on `cart/get_delivery_methods` to get the carrier list. 
`invader_success_url` and `invader_error_url` parameters are used for HTTP redirection after submission according to the response state (valid or error).

    <form method="post" action="/invader/cart/update">
      <input type="hidden" name="invader_success_url" value="/my-next-step" />
      <input type="hidden" name="invader_error_url" value="/my-error-page" />
      <input type="hidden" name="step[current]" value="cart_address">
      <input type="hidden" name="step[next]" value="cart_checkout">
      {% for address in store.addresses %}
        <label>
          <input type="radio" value="{{address.id | round}}" name="shipping[address][id]" />
          {{ address.name }}
        </label>
      {% endfor %}
      <input type="submit" name="submit">
    </form>


_To see how to call API method from a HTML form See [Call API from HTML Form](/docs/api-introduction)._



### [POST] Method cart/add_item 

Add product to cart. This method creates a new line in the cart and refreshes the `store.cart.lines` variable.

#### Options

| Name | Type | Description |
|--------|--------|-------------|
| product_id | Integer | Product objectID  |
| item_qty | Integer | Number of product added in cart  |

#### Example

Add a new item in the cart via a simple HTML form. 
This form adds 10 products with ObjectID "123456" in the cart.

    <form method="post" action="/invader/cart/add_item">
      <input type="hidden" name="invader_success_url" value="/my-cart" />
      <input type="hidden" name="invader_error_url" value="/my-error-page" />
      <input type="hidden" name="item_qty" value="10">
      <input type="hidden" name="product_id" value="123456">
      <input type="submit" name="submit">
    </form>

_To see how to call API method from a HTML form See [Call API from HTML Form](/docs/api-introduction)._


### [POST] Method cart/update_item

Update a cart line quantity.

#### Options

| Name | Type | Description |
|--------|--------|-------------|
| item_id | Integer | cart line ID  |
| item_qty | Integer | New quantity  |

#### Example

Add a new item in the cart via a simple HTML form. 
This form updates line #1 to set quantity = 8.


    <form method="post" action="/invader/cart/update_item">
      <input type="hidden" name="invader_success_url" value="/my-cart" />
      <input type="hidden" name="invader_error_url" value="/my-error-page" />
      <input type="hidden" name="item_qty" value="8">
      <input type="hidden" name="item_id" value="1">
      <input type="submit" name="submit">
    </form>

_To see how to call API method from a HTML form See [Call API from HTML Form](/docs/api-introduction)._


### [GET] Method cart/get_delivery_methods

Get the list of all delivery methods available according to cart data (shipping area).

#### Example

Display delivery methods.

    {% erp get 'cart/get_delivery_methods' as delivery_methods %}
    {% for carrier in delivery_methods %}
      <label>
        <input type="radio" value="{{carrier.id | round}}" name="carrier[id]" />
        {{ carrier.name }}
      </label>
    {% endfor %}



_To see how to get data from  API see [ERP tag on Special tag ](/docs/special-tag)._


### [POST] Method cart/apply_delivery_method

Set selected carrier on cart. This method causes shipping cost calculation depending on carrier, cart content and shipping area.
Get carrier list with method cart/get_delivery_methods

#### Options

| Name | Type | Description |
|--------|--------|-------------|
| carrier.id | Integer | Carrier ID  |

#### Example

Form to set carrier on cart.

    {% erp get 'cart/get_delivery_methods' as delivery_methods %}
    <form method="post" action="/invader/cart/apply_delivery_method">
      <input type="hidden" name="invader_success_url" value="/my-cart" />
      <input type="hidden" name="invader_error_url" value="/my-error-page" />
      {% for carrier in delivery_methods %}
        <label>
          <input type="radio" value="{{carrier.id | round}}" name="carrier[id]" />
          {{ carrier.name }}
        </label>
      {% endfor %}
      <input type="submit" name="submit">
    </form>

_To see how to call API method from a HTML form See [Call API from HTML Form](/docs/api-introduction)._


