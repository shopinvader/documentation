Shopnvader provides some globals object to get an access to e-commerce features. 


## Shopping cart

`store.cart` is the object that is the current cart.
This variable is only available after the add to cart action. 
store.cart allow cart lines with product data, shipping address, delivery mode, Cart object is stored and managed directly via odoo. 


To avoid performance problems, cart data are cached, each cart updating (add new product, set a shipping address…) refresh cached datas via an Odoo API call.


Each cart update recalculate grand total, subtotal, shipping cost and VAT amount automatically.


## Customer

It display logged user data. This is an alias of address with profile address type. 

Customer is logged via LocomotiveCMS authentication process. Authentication use customer models.

## Customer Adresses

`store.addresses` provide to you logged user's addresses.
It is a collection of customer's addresses. This object are only defined when you have a logged customer. 

Address object represent a customer address (for shipping or billing) or user data profile. Some attribute are only available for “profile” type address. 

with_scope, paginate liquid tag are available with `store.addresses`.
A customer have only one “profile” type address. It isn’t possible to update address_type value or remove address with “profile” type.


## Product

Products are saleable item displayed into your shop.
Products can be accessed in all Liquid templates via `store.products`.

store.products represent a collection of all products variants available into your webshop.
This variable is a collection of product stored in Algolia.
with_scope, paginate liquid tags are available with store.products.


### Price

Price is an attribute of product objet. Price attribute contains some product price list. Shopinvader use the Locomotive CMS parameter `site.metafields.erp.default_role` value to get the default pricelist.
Price product’s attribute contains automatically the value of the current pricelist.
In case of logged user, Shopinvader get the user price list (pricelist field defined in a customer content type).


## Sales


### store.sales

store.sales is a collection of orders history of the current user. 


### store.last_sale

Sale order available after the checkout. The shopping cart become a sale order just after the payment. This object is use for the last checkout’s page to display an order summary.


## Custom store's attribute 

Shopinvader has other objects necessary for an ecommerce website. These information are stored in the site.yml file into the _store attribute. Odoo automatically syncs data to _store in site.yml.

_store configuration has some attributes to get countries list, currencies, faceting filter. These data are used on the checkout process.


### store.available_country

Shipping countries list available in the webshop. This list is defined in shopinvader configuration in odoo. 
This list is usually used to setting up a country select tag in HTML form to update or create customer addresses.


### store.currencies_format

Currencies available for the website. This list is defined in shopinvader configuration in odoo. 
This list is used for make a currency switcher. store.currencies_format is a collection of currency objects. 
Currency object have all attributes necessary to formats a number into a currency string ( format, symbol, separator delimiter…).
Currencies exchange rates are stored in store.currencies_rate object. Odoo syncs exchange rates currencies.


### store.currencies_format

Collection of all exchange rates of all currencies defined on store.currencies_format.
Odoo syncs values automatically.
