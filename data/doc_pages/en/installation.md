## Requirement


Before starting, you need to make sure your system has docker and docker compose. 


If it is not the case, please refer to :


- Docker : [docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs](https://docs.docker.com/install/linux/docker-ce/ubuntu/#extra-steps-for-aufs)


- Docker Compose : [docs.docker.com/compose/overview/](https://docs.docker.com/compose/overview/)


## Installation


### Docker images


Clone the shopinvader-getting-started repository


```bash
git clone https://github.com/akretion/shopinvader-getting-started.git
```


Start docker:


```bash
cd shopinvader-getting-started
```


```bash
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

-  **Odoo** : [http://localhost:8069](http://localhost:8069) user: admin - password : admin 


### Search Engine


#### Elasticsearch

Coming soon...


#### Algolia

Algolia [www.algolia.com](https://www.algolia.com/) is used to the search and for storing a cache of your products and categories. 
An alternative based on Elastic will be started soon.

 - First create an Algolia account: [www.algolia.com](https://www.algolia.com/).
 - Then get your application ID and admin key in the tab « api key »

The API Key and application ID are necessary for the configuration step below.


### Template

In order to have a starting point, you can use the demo template, this is the one used to power up the demo Shopinvader website.


```
git clone https://github.com.akretion/shopinvader-template 
```


Alternatively, if you don’t want to manage your code using git, download the code from [https://github.com/akretion/shopinvader-template/releases](https://github.com/akretion/shopinvader-template/releases).

Go on [http://localhost:3000](http://localhost:3000) to render the template.

