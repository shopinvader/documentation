### Exporting your catalog to algolia 


#### Indices creation


Go on [www.algolia.com](https://www.algolia.com/) and get Admin API Key and application ID.
Create two new indices on aloglia on for product and another for categories. Your index name must finish with the langage key (ex : en_US, fr_FR…).


Exemple : 


- **demo_products_en_US** for products data

- **demo_categories_en_US** for category data

After configuration, odoo will synchronize products and categories data to these indices.


#### Indices settings

Go on Backend configuration in Odoo
Configure your index and api key in the odoo algolia backend

