## About Storefront API

Shopinvader gives you an REST API to build customized purchasing experiences. The Storefront REST API is used on your webshop template to interact with shopping objects like the cart, logged customer, carrier, addresses. 
This API gives you control to Add or update data in Odoo via specific methods. The Shopinvader's Storefront REST API built on few  shopinvaders Odoo's modules.

Shopinvader installation include an access to swagger in Odoo to get API specification. Swagger takes the manual work out storefront API documentation. To see Swagger on odoo go to
< your-odoo-url >/api-docs.


Using the Shopinvader Storefront API, you can:

-  fetch data about categories and product
-  create new checkout experience with fill control on the process.
-  create or modify customers including addresses.

**Product and Categories**

Product and categories data are not provided directly by the REST API. Get product and categories data by using elasticsearch API instead of the REST API. 
This is quite an interesting specificity to avoid overloading Odoo in case where you only want to display product page or categories pages. 
Elasticsearch indexes are feeded by Odoo with product and categories data. 


 > **Caution** 
 > Storefront API is an authenticated API.
 

### API Authentification

REST API requiere authentification with API Key. API credential are defined in Odoo.
To defined REST API credential go on Shopinvader section on Odoo, select your Shopinvader Website and defined new values on Credentials tabs.


### Ways to call the Storefront API

Shopinvader provides the flexibility to call by using :
-  HTTP Request on the REST API used for external apps,
-  HTML form to interact with API on your liquid template.

#### Using HTTP REQUEST

For external apps, you can access to API method with simple HTTP request. External API call requires an authentications.
See API Authentification doc. REST uses four different HTTP 1.1 verbs (GET, POST, DELETE, PUT) to perform tasks.

**API Entry Point:** *< your-odoo-url >*/shopinvader/
To perform the authentification add API-KEY header params with api key value


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
API Entry Point and API authentification is automaticaly filled when you make an API request via an HTML form thanks to credentials defined in site configuration.

HTML form submission calls API method and make redirection in order to API response status.

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
