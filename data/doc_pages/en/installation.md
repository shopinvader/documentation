## Requirement


Before starting, you need to make sure your system has docker, docker compose.


If it is not the case, please refer to :


- Docker : [docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs](https://docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs)


- Docker Compose : [docs.docker.com/compose/overview/](https://docs.docker.com/compose/overview/)

## Installation with docker images

these steps will allow you to have a full Shopinvader instance with Odoo, Locomotive and Elasticsearch using Docker.

To get started, you need to clone the shopinvader-getting-started repository


```
git clone https://github.com/shopinvader/shopinvader-getting-started.git
```


Start docker:


```
cd shopinvader-getting-started
```

This might take a few minutes, as it will setup everything.

```
docker-compose up
```

psst : use `docker-compose up -d` if you want to use your terminal while the server is up. You can then use “docker-compose down” to stop it.


**In case of ERROR:**


Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?  - <strong>use sudo </strong>, but you should prefer adding your user to the docker group for continued use.


Now we have running Odoo and Shopinvader instances.


- **Website frontend**: [http://localhost:3000](http://localhost:3000)

- **Backend**: [http://localhost:3000/locomotive](http://localhost:3000/locomotive)
		- user : demo@shopinvader.com
		- password: akretion

- **Odoo**: [http://localhost:8069](http://localhost:8069) user: admin - password : admin

But now we need to synchronise the data between the different services. 

### Search Engine

For this demo you will use Elasticsearch as search engine.
We are also compatible with Algolia, but it's not the purpose of this quick setup.


With that project you already have a docker container running.
What we need, is to synchronise the odoo data into your elastic index, by default the products and categories that are binded synchronise every 24 hours with the search engine but you can force the export for testing purposes by following these steps:

- Head to the Shopinvader page in Odoo.<br/>
The search engine implementation in odoo is designed to send products and categories that are binded.<br/> 
Products demo data are included in Shopinvader, so all you have to do is click '<strong>bind all</strong>' for the products and categories (in the developper page).

 - Once the products and cateogies are binded (you can check what products and categories are binded in the top right).<br/>
  Head to the '<strong>search engine</strong>' section, click the '<strong>Recompute</strong>' and '<strong>Export</strong>' buttons to force compute and export the data to Elasticsearch.

### LocomotiveCMS

To synchronise Odoo and Locomotive to communicate with each other in Odoo you need to go into the Shopinvader's page in Odoo, in the Developper tab, click the  '<strong>Reset</strong>' button. 

### Template

In order to have a starting point, you can use the demo template, this is the one used to power up the demo Shopinvader website.

In your folder of the clone repo from shopinvader-getting-started.git run the following command:

```
git clone https://github.com/shopinvader/shopinvader-template template
docker-compose run --service-port wagon
```

Once in the docker image run the following command:
to synchronise the configs:

```
bundle exec wagon deploy test -v
```

and finally to synchronise the data files (images, ect, ..)

```
bundle exec wagon deploy test -d
```

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

