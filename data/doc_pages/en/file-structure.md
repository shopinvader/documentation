## Website pages

Website pages are located on `app/views/pages` folder, take a look at [doc.locomotivecms.com/docs/create-a-page](https://doc.locomotivecms.com/docs/create-a-page) to learn how Locomotive templates are organized.

Shopinvader webshop need to have some generic ecommerce part like checkout pages, user account area, product and category pages. Generic template implement these ecommerce pages. Below you can find out pages organization in the file tree.



#### Layout

**Account pages location** :  `app/views/pages/layouts`


Layouts are a specific kind of page. Layout are a set of pages use to defined commom page template use by multiple pages. 
Please see [doc.locomotivecms.com/docs/layouts](https://doc.locomotivecms.com/docs/layouts) for more information.

Layout are nestable component, a layout can extends another layout.


ShopInvader template already includes some templates but new layouts can be added.
Layout included:
- main : HTML struture with head, body and footer
- checkout: use for checkout pages
- faceting: for pages with faceting filters like search result page, categories...
- account: use for logged account area.



### Customer account

**Account pages location** :  `app/views/pages/account`


Customer account pages to see order history, change password, update shipping address are located in `app/views/pages/account`. 
These pages depends on a specific layout `layout/account.liquid` used to trigger user auth. 

pages/account.liquid is the login page


### Checkout pages

**Cart pages location** :  `app/views/pages/cart`


Shopping cart pages with cart summary, authentification, shipping mode selector and payment area. Checkout pages user 

layouts: Create the main layouts that could be used thought out the template, ShopInvader template already includes some templates but new layouts can be added.

This page use checkout section to build the page. Section are available sinve Locomotive v4.0, see section documentation [doc.locomotivecms.com/v4.0/docs/section-introduction](https://doc.locomotivecms.com/v4.0/docs/section-introduction).


### Product page

**Product pages location** : `app/views/pages/templates/products`


Product template for all product page. 

This page consume product data provided by API request to Search engine (Elastic search or Algolia). Shopinvader get the product according to the URL. Product template location is configurable in `app/config/site.yml` in Algolia or Elastic search part (depends on which search engine is used).

This page use product_page section to build the page.


### Category page

**Category pages location** : `app/views/pages/templates/categories`

category template for all categories available in algolia. Shopinvader get the category according to the URL.
 
This page use search section to build the page. 

## Section

**Section files location** : `app/views/pages/sections`


Generic template provide a large set of section used to build webshop pages. Product page, checkout pages or faceting pages have specific sections. For exemple, product page in an assembly of product_page's section blocks, thanks to this solution web marchant can reorganize blocks position and customize these kind of pages.


> Section are available since Locomotive v4.0, see section documentation [doc.locomotivecms.com/v4.0/docs/section-introduction](https://doc.locomotivecms.com/v4.0/docs/section-introduction).


## Snippets

**Sippets files location** : `app/views/pages/snippets`

Contains liquid files that can be reused in the template. See [doc.locomotivecms.com/docs/snippets](https://doc.locomotivecms.com/docs/snippets). Generic template contains few snippets used by section like cart or product.



## Assets

**Assets files location** : `app/public`

- fonts: Directory for all customs fonts that will be use in the template.
- images: Directory for images that will be use in the template.
- javascript: All js libraries needed for the website
- stylesheets: SCSS files, that will help you customize your template.     

Generic template use Bootstrap v4 CSS framework. You can customize bootstrap template with SCSS variable file `/app/public/stylesheets/components/_custom.scss`. Variable defined in custom.scss override default bootstrap value. Please see [getbootstrap.com/docs/4.0/getting-started/theming/](https://getbootstrap.com/docs/4.0/getting-started/theming/). and [https://sass-lang.com/documentation/variables](https://sass-lang.com/documentation/variables).


Each sections have a dedicated SCSS file in `/app/public/stylesheets/sections/` folder.