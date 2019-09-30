## Introduction

This is a fonctional training for learning how to use shopinvader.
Please keep in mind the following addresses:

- Odoo: http://odoo.localtest.me:8069
- Locomotive Backend: http://my-website.localtest.me:3000/locomotive
- My website: http://my-website.localtest.me:3000

## Configure Odoo

After installing the demo, you need to synchronize your odoo with your website.
Go to `Shopinvader` menu and open the `Demo Shopinvader Website`

<img src="/samples/fonctional-training/odoo-config-step-1.png" width="400" hight="400">


Go in the tab `developper` and click on `Reset site settings`

<img src="/samples/fonctional-training/odoo-config-step-2.png" width="400" hight="400">


## Play with your installation

In order to understand how shopinvader works we are going to play with it.


### Register a new customer

First go on your website and register as a customer.

After doing this go into odoo in menu `Sales > Order > Customer`.
You should see your new customer


<img src="/samples/fonctional-training/odoo-customer.png" width="400" hight="400">


Now go to your website

- modify your customer information
- add custom addresses
- check the result on Odoo


### Add product in the cart

Navigate in the category, search a product. When you have found the right product, add it to the cart.


Now go into odoo in menu `Sales > Cart`, you should see your cart.


<img src="/samples/fonctional-training/odoo-cart.png" width="400" hight="400">


Now add other product, change the quantity in the cart and check the result into Odoo


### Checkout

Now you cart is ready, let's try to do the checkout

Fill your address and before finishing the checkout go back into odoo.
You see the step complet by the customer

<img src="/samples/fonctional-training/odoo-cart.png" width="400" hight="400">


Now finish the checkout and pay by check or bank statement

After finishing, go to your account menu and check your sale order history

### Process the sale order

Go back in odoo to process the sale order.


First confirm the sale order

#### TODO add screenshot




Go back in your website and check the change of state.



### Product synchronisation

Products and categories are exported into a search engine.
For this tutorial we use elastic search.

When you change a product it is not immediatly exported.
For exporting a product 2 step will be applyed


### Recomputing the json

Json that represent all products information is build and store in odoo

A cron run every X time to recompute all the json of all product and flag if the json have change.
If the json have change the product will be exported

You can force to recompute a json by clicking on `recompute product`

#### TODO add screenshoot


### Exporting the json

A cron is running every X time to generate a bacth export job.

#### TODO add screenshoot
