# Introduction

In this tutorial you are going to learn how to develop a custom feature for shopinvader.

Shopinvader architecture is based on a REST API. The main idea is to be able to develop
new features without any frontend template.
Traditional developement mixes the front- and back-ends. This is a bad practice and slows development speed (for each iteration, the frontend needs the backend to finish development and inversely)

You do not need to install wagon and locomotive to start developing.
You really only need Odoo, and keep in mind that involving other elements of the stack (wagon) is the wrong way to go.

To be efficient in our development, we will start by writing a test !

<div class="alert alert-warning">
<p>Tips for testing</p>

<p>Be efficient use pytest : <a href="https://github.com/camptocamp/pytest-odoo" target="_blank">pytest-odoo</a></p>
</div>

<div class="alert alert-info">
<p>Every step of the following tutorial can be found here : <a href="https://github.com/shopinvader/odoo-shopinvader-customize/commits/master" target="_blank">odoo-shopinvader-customize</a></p>
</div>

# Modify sale service (read information)

Imagine that you want to show extra information on your sale order (like the state of manufacturing, the hour/date for package retrieval...).

For this exercise we are going to add on Sale Orders a custom Char field, named "custom_field". Then we will add it into the API.

## STEP 1: First create a module for ODOO

If it's the first time that you create an Odoo module please take a look here :

 - ODOO doc: https://www.odoo.com/documentation/13.0/
 - OCA GUIDELINE: https://github.com/OCA/odoo-community.org/blob/master/website/Contribution/CONTRIBUTING.rst


## STEP 2: Add a test

Writing a test for shopinvader is the same as writing a standard Odoo test, but instead of using Odoo's TransactionCase we recommend using the CommonCase from Shopinvader.


### CommonCase class

The CommonCase class has some helpers to make it simpler to test your service.
You can import the class like that:

```
from odoo.addons.shopinvader.tests.common import CommonCase
class CustomSaleServiceTest(CommonCase):
    def test_read_custom_field(self):
        pass
```

### work_on_services helper

This helper will return the requested service

Example

```
with self.work_on_services() as work:
    sale_service = work.component(usage="sales")
    sale_service.dispatch('get', sale_id)
```

If you want to pass the currently logged in partner from the frontend

```
partner = self.env.ref("shopinvader.partner_1")
with self.work_on_services(partner=partner) as work:
    sale_service = work.component(usage="sales")
    sale_service.dispatch('get', sale_id)
```

### Now it's your turn

Try to build the test, when you think it's ready you can take a look at

Solution at **Modify sale service. STEP 2: Add test**

## STEP 3: Add the feature

### Extend the model Odoo-side

Add the field "custom_fields" to the model *sale.order*

### Extend the service

You need to inherit the method *_convert_one_sale* of the service *shopinvader.sale.service*

Inheriting the SaleService can be done like this

```
from odoo.addons.component.core import Component
class SaleService(Component):
    _inherit = "shopinvader.sale.service"
```

Note: services are based on the Component module: [doc](https://odoo-connector.com/api/api_components.html) [code source](https://github.com/OCA/connector)

# Modify addresses webservice (read/write information)

Now you know how to modify a webservice let's go futher.

We are going to add a new field on the partner and make it editable for the address service

## STEP 1: Add a test

Once more we start with writing the test.
You need to create three tests

- one for reading the information through the webservice
- one for writing the information through the webservice
- one for creating an address with this information through the webservice

## STEP 2: Add the feature

Now you have written a failing test, let's add the features:

- add the field on the model
- customize the address service


# Add a new method on sale service

On the sale order we are going to add a new method that can be called by the web service

This method will be *custom_action* and will just switch the current value for the Boolean field *custom_action_done* on the sale order.

## STEP 1: Add the test

The test should use an existing sale order and call the method *custom_action* by using the dispatch method.

Add an assert to check that the field *custom_action_done* is flag at True


## STEP 2: Add the feature

Now you can edit the sale service and add the *custom_action* method.

Do not forget to add a validator.

