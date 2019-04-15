## Pages

### app/views/pages :
account : Customer account pages to see order history, change password, update shipping address…. [Customer authentication required]
cart: Shopping cart pages with cart summary, authentification, shipping mode selector and payment area.
layouts: Create the main layouts that could be used thought out the template, ShopInvader template already includes some templates but new layouts can be added.
templates:
products : product template for all product page.   Shopinvader get the product according to the URL.

categories : category template for all categories available in algolia. Shopinvader get the category according to the URL.

        snippets: Contains liquid files that can be reused in the template
config: This directory contains “site.yml”, this files contains the main configuration: ODOO & Algolia API KEY, Algolia indexes, cache configuration, countries and indexes.
data: Contains customer.yml , which details customers name, email, slug and role.
public
fonts: Directory for all customs fonts that will be use in the template.
images: Directory for images that will be use in the template.
javascript: All js libraries needed for the website
stylesheets: SCSS files, that will help you customize your template.     
