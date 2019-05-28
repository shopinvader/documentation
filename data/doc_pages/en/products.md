## About product object

Products are saleable item displayed into your shop.
Products can be accessed in all Liquid templates via `store.products`.

`store.products` represent a collection of all products variants available into your webshop.


This variable is a collection of product stored in Algolia or Elasticsearch.
with_scope, paginate liquid tags are available with `store.products`.


> In these examples below, *product* variable is an occurence of store.products collection.

## Product Attributes

### Main attributes

Attributes of store.products entry.

| Name | Type | Description |
|--------|--------|-------------|
| attributes | Object | Collection of variant attribute (variable name and value)
| attribute_set | Object | Custom's attributes set name
| brand | String | Brand name
| categories | Object | Collection of parents categories
| cross_sellings | Object | Collection of product ObjectID for cross selling ex: [{id:60}, {id: 78}].
| description | Object | Product description (HTML)
| hierarchicalCategories | Object | Parent categories list for faceting ex: {lvl0:…, lvl1:…}
| id | Integer | Product's ID
| images | Object | Collection of URL images
| main | Boolean | Main variant
| meta_description | String | Meta description tag value.
| meta_keywords | String | Meta keyword tag value.
| model | Object | Product template object (with name attribute)
| name | String | Product name with model name and variant name
| price | Object | Price. See price documentation below
| only_quotation | Boolean | Only available for quotation (not for sale)
| redirect_url_key | Object | List URL redirection (HTTP status 301)
| seo_title | Object | Product page Title , title tag value
| short_description | Object | Short product description (for thumbnail)
| short_name | Object | Variant name
| sku | String | Product reference code
| stock | Object | Stock quantity saleable (for each warehouse)
| structured_attributes | Object | custom attributes ordered by group
| variant_attributes | Object | Custom's attributes
| variant_count | Integer | Product variant count
| up_sellings | Object | Collection of product ObjectID for up selling ex: [{id: 10}, {id: 11}].
| url_key | Object | Product page URL

**Example :**

Display product model name and variant name.


```
{% for product in store.products %}
      <b>{{product.model.name}}</b> - {{product.short_name}}
{% endfor %}
```

### Images

Shopinvader Odoo module can generate images with differents sizes. Image's sizes are set up in backend configuration in Odoo.

Image attribute of product’s data is a product’s images collection.

| Name | Type | Description |
|--------|--------|-------------|
| src | String | Image URL |
| alt | String | Alternate name |



### Prices


Price is an attribute of product objet. Price attribute contains multiple product's price list. Shopinvader use the Locomotive CMS parameter `site.metafields.erp.default_price` value to get the default pricelist.

Price product's attribute contains automatically the value of the current pricelist.

In case of logged user, Shopinvader get the user's price list (pricelist field of customer content type).


| Name | Type | Description |
|--------|--------|-------------|
| discount | Float | Discount value (Percentage) |
| original_value | Float | Old price value without discount |
| tax_included | Boolean | True  VAT included |
| value | Float | Price value |
