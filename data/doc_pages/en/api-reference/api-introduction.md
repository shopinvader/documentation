## About Storefront API

Shopinvader gives you a REST API to build customized purchasing experiences. The Storefront REST API is used on your webshop template to interact with shopping objects like the cart, logged customer, carrier or addresses. 
This API gives you control to Add or update data in Odoo via specific methods. The Shopinvader's Storefront REST API is built on a few Odoo Shopinvader modules.

Shopinvader installation includes an access to swagger from Odoo to get your exact API specifications. Swagger takes the manual work out storefront API documentation. To see Swagger in Odoo go to
< your-odoo-url >/api-docs.


Using the Shopinvader Storefront API, you can:

-  fetch data about categories and product
-  create new checkout experience with fill control on the process.
-  create or modify customers including addresses.

**Product and Categories**

Product and categories data are not provided directly by the REST API. These data are fetched via Elasticsearch API instead of the REST API.
This is quite an interesting specificity to avoid overloading Odoo when someone only wants to display products pages or categories pages.
Elasticsearch indexes are fed by Odoo with product and categories data. 


 > **Caution** 
 > Storefront API is an authenticated API.
 

### API Authentication

REST API requires authentication with an API Key. API credentials are defined in Odoo.
To define the REST API credentials, go on the Shopinvader section in Odoo, select your Shopinvader Website and define new values in the Credentials tab.


### Ways to call the Storefront API

Shopinvader provides the flexibility to call by using :
-  HTTP Requests on the REST API, for external apps,
-  HTML forms to interact with API, for your liquid templates.

#### Using HTTP REQUEST

For external apps, you can access to API method with simple HTTP request. External API call requires an authentications.
See API Authentication doc. REST uses four different HTTP 1.1 verbs (GET, POST, DELETE, PUT) to perform tasks.

**API Entry Point:** *< your-odoo-url >*/shopinvader/
To perform the Authentication add API-KEY header params with api key value


##### Example

This example runs an HTTP request to add a new product in the cart:

    curl -X POST "< your-odoo-url >/shopinvader/cart/add_item" 
      -H  "accept: */*" 
      -H  "API-KEY: <my-API-key>" 
      -H  "Content-Type: application/json" 
      -d "{\"item_qty\":10,\"product_id\":123456}"



#### Using HTML Form

Shopinvader provides other way to run API call thanks to using HTML Form on your storefront template. 

This method gives you control on API via a simple HTML Form in order to simplify API request on your shopinvader template. 
API Entry Point and API authentication is automatically filled when you make an API request via an HTML form thanks to credentials defined in site configuration.

HTML form submission calls an API method and makes a redirection in order to get the API response status.

This kind of HTML form required some specifics attributes and fields :

**methods** : use GET or POST HTTP verbs. DELETE, PUT are not available in this implementation.
**action** : prefix API method by "/invader" like `action="/invader/cart/add_item"`.

**Fields**
Theses following fields are required for each form with an action.

| Name | Type | Description |
|--------|--------|-------------|
| invader_success_url | String | Redirect URL after successful API return |
| invader_error_url | String | Redirect URL after an API error return |

Each API methods may have other specific attributes.


##### Example

Add a new item in the cart via a simple HTML form. 
This form adds 10 products with ObjectID "123456" in the cart.

    <form method="post" action="/invader/cart/add_item">
      <input type="hidden" name="invader_success_url" value="/my-cart" />
      <input type="hidden" name="invader_error_url" value="/my-error-page" />
      <input type="hidden" name="item_qty" value="10">
      <input type="hidden" name="product_id" value="123456">
      <input type="submit" name="submit">
    </form>
