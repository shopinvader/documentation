## Alternative installation methods

If you wish to install odoo separataly from a docker image you can do so following the following instructions:

**Please note that Shopinvader can be setup and hosted by [Acsone](https://www.acsone.eu/page/homepage) or [Akretion](https://akretion.com/en)!**

### Odoo's manual installation

#### Simple Installation
To simply try out Shopinvader in a new Odoo 12 install, here are the lines to copy in a requirement.txt file:
<br/>
```
--find-links https://wheelhouse.acsone.eu/manylinux1
--extra-index https://wheelhouse.shopinvader.com/simple/
--extra-index https://wheelhouse.odoo-community.org/oca-simple/

-r https://raw.githubusercontent.com/odoo/odoo/12.0/requirements.txt
https://nightly.odoo.com/12.0/nightly/src/odoo_12.0.latest.zip

https://github.com/OCA/openupgradelib/archive/master.tar.gz

odoo12_addon_shopinvader_demo_app

```

Other available payment methods can be added from shopinvader-payment such as:

```
odoo12-addon-shopinvader-payment-stripe
odoo12-addon-shopinvader-payment-sips
```

Using <strong>python3</strong> install Shopinvader using the requirement.txt file with:

```
python -m pip install -r ./requirements.txt
```

Once Odoo is installed, install the module named '<strong>shopinvader_demo_app</strong>' which will install Shopinvader with some demo data.<br/>
You can do both with:

```
odoo -d odoo-shopinvader-easy -i shopinvader_demo_app -c ./odoo.cfg
```

With the content of odoo.cfg:

```
[options]
running_env=dev
workers = 3
server_wide_modules = web,queue_job

[queue_job]
channels = root:2
```

#### Avanced Installation
If you wish to install Shopinvader in your own Odoo installation, here is a list of the repos and modules you should install:

- Odoo-Shopinvader-Payment(branch 12.0): [https://github.com/shopinvader/odoo-shopinvader-payment](https://github.com/shopinvader/odoo-shopinvader-payment)
	- shopinvader_payment_manual
	- (optionnal) shopinvader-payment-stripe
	- (optionnal) shopinvader-payment-sips

- Odoo-Shopinvader (branch 12.0): [https://github.com/shopinvader/odoo-shopinvader](https://github.com/shopinvader/odoo-shopinvader)
	- shopinvader_elasticsearch
	- shopinvader_image
	- shopinvader_delivery_carrier
	- shopinvader_locomotive_guest_mode
	- shopinvader_assortment
	- shopinvader_product_stock

Other repos can be necessary, they are located in oca_dependencies.txt file


Alternatively, if you don’t want to manage your code using git, download the code from [https://github.com/shopinvader/shopinvader-template/releases](https://github.com/shopinvader/shopinvader-template/releases).

Go on [http://localhost:3000](http://localhost:3000) to render the template.

