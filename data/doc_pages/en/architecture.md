##Components


### Odoo

It’s the ERP. It’s where you define products, categories, store the sell orders, manage stock, accounting, purchases…
Odoo store its data in postgresql database.

This is where all the business related tasks are done (handling of the sale orders, 
stock management..).

See [https://www.odoo.com/](https://www.odoo.com/)



### LocomotiveCMS

Locomotive is the CMS. It’s the engine of the e-commerce website and the backoffice for editing contents. 
It’s where you write public content like blog posts, pages. Locomotive stores its data in a mongodb database.

Locomotive is the server side of the architecture. This is what's behind your website, it manages dynamic web pages and can serve 
blogs, portals and stores.
Locomotive documentation can be found here: [doc.locomotivecms.com/docs](https://doc.locomotivecms.com/docs)


#### Wagon

Wagon is a command line tool that let's you develop for Locomotive right on your local machine.
It can do a Local render of the website and can manage the deployment of the template to locomotive production server.
Wagon is the server side of the architecture.


#### Locomotive-shopinvader-gem

It’s an addon of locomotive which take care of all the communication between locomotiveCMS and Odoo.


#### Shopinvader template

It’s the template of your website. It defines the layout of the pages, the styles, the structure. 
It’s where you put your HTML / JS / CSS.


### Algolia

It’s a search engine. Odoo sends the products and categories to algolia. Locomotive and the user’s browser fetch products and categories from Algolia.
Why we need a search engine ? It offers us a very rich set of search features like facetting, search by synonyms and spelling. It’s effective and provide very good performances.


## Workflow

All components communicate between them as follows:


- Odoo push configuration to Locomotive.

- Odoo push products and categories to Algolia.

- Locomotive fetch from Aloglia products and categories.

- Locomotive push and fetch from Odoo carts and other customer informations.
