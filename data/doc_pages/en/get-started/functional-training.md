## Introduction

This is a functional training for learning how to use shopinvader.
Please keep in mind the following addresses:

- Odoo: http://odoo.localtest.me:8069
- Locomotive Backend: http://my-website.localtest.me:3000/locomotive
- My website: http://my-website.localtest.me:3000

## Configure Odoo

After installing the demo, you need to synchronize your odoo with your website.
Go to `Shopinvader` menu and open the `Demo Shopinvader Website`

<img src="/samples/functional-training/odoo-config-step-1.png" width="400" hight="400">


Go in the tab `developper` and click on `Reset site settings`

<img src="/samples/functional-training/odoo-config-step-2.png" width="400" hight="400">


## Play with your installation

In order to understand how shopinvader works we are going to play with it.


### Register a new customer

First go on your website and register as a customer.

After doing this go into odoo in menu `Sales > Order > Customer`.
You should see your new customer


<img src="/samples/functional-training/odoo-customer.png" width="400" hight="400">


Now go to your website

- modify your customer information
- add custom addresses
- check the result on Odoo


### Add product in the cart

Navigate in the category, search a product. When you have found the right product, add it to the cart.


Now go into odoo in menu `Sales > Cart`, you should see your cart.


<img src="/samples/functional-training/odoo-cart.png" width="400" hight="400">


Now add other product, change the quantity in the cart and check the result into Odoo


### Checkout

Now you cart is ready, let's try to do the checkout

Fill your address and before finishing the checkout go back into odoo.
You see the step complet by the customer

<img src="/samples/functional-training/odoo-cart.png" width="400" hight="400">


Now finish the checkout and pay by check or bank statement

After finishing, go to your account menu and check your sale order history

### Process the sale order

Go back in odoo to process the sale order.

- confirm the sale order
- check the change on your website account
- process the delivery on Odoo side
- check the change on your website account


### Product synchronisation

By default binded products and categories are synchronised every 24 hours with the search engine but you can force the export.
So keep in mind when you change a product it is not immediatly exported.

For exporting a product 2 step will be applied ** Recomputing the json ** and then ** Exporting it **


#### Recomputing the json

On the **shopinvader.variant** we store a json will all the product information.

A cron run every X time and will recompute this json and flag the product with modification.

Go to `Setting > Technical > Automation > Scheduled Action`

And click on `Search Engine: recompute all index`

<img src="/samples/functional-training/odoo-recompute-cron.png" width="400" hight="400">


Now click on run and go to the `queue job` menu to see what is happening

Take a look to `Shopinvader > Variant` and group by state.


#### Exporting the json

A cron is running every X time to generate a bacth export job.

Go to `Setting > Technical > Automation > Scheduled Action`

And click on `Search Engine: Generate Job for exporting binding per index`


<img src="/samples/functional-training/odoo-export-cron.png" width="400" hight="400">


After looking at the job and checking the state of the shopinvader variant.

Try to

- modify it
- recompute the json
- check that the state have change
- run the export, check the state
- and then check the result on the website


#### Tips

When developping it's cool to sometime force, the export, re-synchronize the data between a corrupted index, dropping the data of the index...

For that you have some special action accessible from the shopinvader menu


<img src="/samples/functional-training/odoo-search-engine-action.png" width="400" hight="400">

