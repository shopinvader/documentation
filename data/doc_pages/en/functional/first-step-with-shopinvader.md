## Introduction

Now you have a working installation, you can start to configure it.
The first step is to configure Odoo correctly

## Configure Odoo

After installing the demo, you need to synchronize your odoo with your website.
Go to `Shopinvader` menu and open the `Demo Shopinvader Website`

<img src="/samples/functional-training/odoo-config-step-1.png" width="400" hight="400">


Go in the tab `developer` and click on `Reset site settings`

<img src="/samples/functional-training/odoo-config-step-2.png" width="400" hight="400">


The reset site setting will force to the following information

- url and credentials to access to odoo
- url to search indexes and their configuration


## Play with your installation

In order to understand how shopinvader works we are going to play with it.


### Register a new customer

Go to the website

- Create an new customer on the front

Go to odoo

- In menu `Sales > Order > Customer`. You should see your new customer


<img src="/samples/functional-training/odoo-customer.png" width="400" hight="400">


Go back to your website

- modify your customer information
- add custom addresses

Go to Odoo

- check the result on Odoo


### Add product in the cart

Go to the website

- Navigate in the category, search a product.
- When you have found the right product, add it to the cart.


Go to odoo

- In menu `Sales > Cart`, you should see your cart.


<img src="/samples/functional-training/odoo-cart.png" width="400" hight="400">


Go to the website

- Now add other product
- Change the quantity in the cart

Go to Odoo

- check the result into Odoo, the cart is updated in live


### Checkout

Now you cart is ready, let's try to do the checkout

Go to the website

- Fill your address
- do not finish teh checkout yet

Go to Odoo

- You see the checkout step completed by the customer

<img src="/samples/functional-training/odoo-cart.png" width="400" hight="400">


Go to the website

- finish the checkout and pay by check or bank statement
- go to your account menu and check your sale order history

### Process the sale order

Go to Odoo

- confirm the sale order

Go to your website

- check the change on your website account


Go to Odoo

- process the delivery

Go to your website

- check the change on your website account


### Product synchronization

By default bound products and categories are synchronized every 24 hours with the search engine.

But you can force the export manually.

So keep in mind when you change a product it is not immediately exported.

For exporting a product 2 step will be applied

- Recomputing the data that need to be exported (in json)
- Exporting it


#### Recomputing the data

For every product we store a formatted data version what will be exported.

A cron run every X time and will recompute this data and compare with the previous data send. If the data have changed the product is flagged to be exported.

Go to `Setting > Technical > Automation > Scheduled Action`

And click on `Search Engine: recompute all index`

<img src="/samples/functional-training/odoo-recompute-cron.png" width="400" hight="400">


Now click on run and go to the `queue job` menu to see what is happening

Take a look to `Shopinvader > Variant` and group by state.


#### Exporting the data

A cron is running every X time to generate a batch export job.

Go to `Setting > Technical > Automation > Scheduled Action`

And click on `Search Engine: Generate Job for exporting binding per index`


<img src="/samples/functional-training/odoo-export-cron.png" width="400" hight="400">


After looking at the job and checking the state of the shopinvader variant.

Try to

- modify it
- recompute the data
- check that the state have change
- run the export, check the state
- and then check the result on the website


#### Tips

When developing it's cool to sometime force, the export, re-synchronize the data between a corrupted index, dropping the data of the index...

For that you have some special action accessible from the shopinvader menu


<img src="/samples/functional-training/odoo-search-engine-action.png" width="400" hight="400">

