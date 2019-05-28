Special tag are added to Locomotive CMS in order to provide new features necessary for a webshop.

#ERP tag

This tag let you make an APIrequest [get/put/post/delete] to any of ShopInvader’s method.

syntax:
`{% erp <method> <url> as <result_var> %}`


**Example:**


To get delivery method available for the cart content use `erp` tag to make an API request to Odoo.


`{% erp get 'cart/get_delivery_methods' as delivery_methods %}`


As result of this request delivery_methods variable will contain the method’s response and you could go through it with a for loop. 


#Page cache

Documentation coming soon.