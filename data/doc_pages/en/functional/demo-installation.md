## Introduction

For this demo you will use Elasticsearch as search engine.
We are also compatible with Algolia, but it's not the purpose of this quick setup.

With that project you already have a docker container with

- an odoo server (with a postgresql database)
- a locomotive server (with a mongodb database)
- an elastic server for indexing your data
- a docker image with wagon cli inside

In real case your Odoo, Locomotive and Elastic application will be installed on remote server. Wagon is the only required tools for developing a website.


## Requirement


Before starting, you need to make sure your system has docker and docker compose.


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

```
docker-compose up
```

This might take several minutes, as it will setup everything.

<div class="alert alert-danger">
<p>If you have the following message</p>

<p>Bind for 127.0.0.1:80 failed: port is already allocated</p>

<p>Please do not change the port in the docker-compose file but instead stop the service that use this port on your server (maybe apache, nginx or traefik). Everything in the demo have been configured for running on port 80.</p>
</div>


<div class="alert alert-info">
Use `docker-compose up -d` if you want to use your terminal while the server is up. You can then use `docker-compose down` to stop it.
</div>


<div class="alert alert-warning">
<p>Couldn't connect to Docker daemon at http+docker://localunixsocket</p>
<ul>
  <li> is it running?</li>
  <li><strong>use sudo </strong>, but you should prefer adding your user to the docker group for continued use.</li>
</ul>
</div>

Now we have running Odoo and Shopinvader instances.
The frontend website will not work yet correctly as we need to push some configuration from odoo

- **Website frontend**: [http://website-1.localhost](http://website-1.localhost)

- **Backend**: [http://locomotive.localhost/locomotive](http://locomotive.localhost/locomotive)
  + user : demo@shopinvader.com
  + password: akretion

- **Odoo**: [http://odoo.localhost](http://odoo.localhost)
  + user: admin
  + password : admin
