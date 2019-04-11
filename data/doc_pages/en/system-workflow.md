## Shopinvader parts

Shopinvader is divided in 3 parts:


### ERP: Odoo

This is where all the business related tasks are done (handling of the sale orders, 
stock management..).
See [https://www.odoo.com/](https://www.odoo.com/)


### CMS : LocomotiveCMS

This is what's behind your website, it manages dynamic web pages and can serve 
blogs, portals and stores.
See [https://www.locomotivecms.com/](https://www.locomotivecms.com/)


### Search Engine : Algolia

This is what indexes all your products and allows to fuzzy search in it.


### Workflow

- Odoo push configuration to Locomotive.
- Odoo push products and categories to Algolia.
- Locomotive fetch from Aloglia products and categories.
- Locomotive push and fetch from Odoo carts and other customer informations.
