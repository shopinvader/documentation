## Requirement


Before starting, you need to make sure your system has docker and docker compose.


If it is not the case, please refer to :


- Docker : [docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs](https://docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs)


- Docker Compose : [docs.docker.com/compose/overview/](https://docs.docker.com/compose/overview/)


## Installation


Clone the shopinvader-getting-started repository


```
git clone https://github.com/akretion/shopinvader-getting-started.git
```


Start docker:


```
cd shopinvader-getting-started
```


```
docker-compose up
```

psst : use `docker-compose up -d` if you want to use your terminal while the server is up. You can then use “docker-compose down” to stop it.


**In case of ERROR:**


Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?  - use sudo, but you should prefer adding your user to the docker group for continued use.


Now we have running Odoo and Shopinvader instances.


- **Website frontend**: [http://localhost:3000](http://localhost:3000)

- **Backend**: [http://localhost:3000/locomotive](http://localhost:3000/locomotive)
		- user : demo@shopinvader.com
		- password: akretion

- **Odoo**: [http://localhost:8069](http://localhost:8069) user: admin - password : admin


### Search Engine

For this demo you will use elasticsearch as search engine.
We are also compatible with Algolia, but it's not the purpose of this quick setup.

#### Elasticsearch

With that project you already have a docker container running.
What we need it to synchronise the odoo data into you elastic index.


TODO


### Template

TODO

In order to have a starting point, you can use the demo template, this is the one used to power up the demo Shopinvader website.


```
git clone https://github.com.akretion/shopinvader-template
```


Alternatively, if you don’t want to manage your code using git, download the code from [https://github.com/akretion/shopinvader-template/releases](https://github.com/akretion/shopinvader-template/releases).

Go on [http://localhost:3000](http://localhost:3000) to render the template.

