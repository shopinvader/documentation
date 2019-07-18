## About category object 

You can get categories via store.categories global variable. This variable is a collection of categories stored in Algolia.
## Main attributes

Attributes of store.categories entry.

| Name | Type | Description |
|--------|--------|-------------|
| description | String | Meta description tag value.
| childs | Objects | Sub categories
| filters | Objects | Categories faceting filters, list of product’s attribute
| level | Integer | Category’s level in categories tree
| id | Integer | Category ID
| images | Objects | URL image in different size (like product images)
| objectID | Integer |  	Category ID
| meta_description | String | Meta description tag value.
| meta_keywords | String | Meta keyword tag value.
| name | Integer | Category name
| parent | Objects | List of parent categories
| parent_left | Integer | Previous parent categories
| redirect_url_key | Integer | List URL redirection (HTTP status 301)
| seo_title | Integer | Category page Title , title tag value
| short_description | String | Short description of the category
| subtitle | String | Category short description
| url_key | String | Category relative URL


**Example :**


Display categories list.

```
<ul>
	{% for category in store.categories %}
	  <li>
	    <a href='{% path_to category %}'>
	      {{category.name}}
	    </a>
	  </li>
	{% endfor %}
</ul>
```


```

<ul>
{% for category in store.categories %}
  <li>
    <a href='{% path_to category %}'>
      {{category.name}}
    </a>
  </li>
{% endfor %}
</ul>
```