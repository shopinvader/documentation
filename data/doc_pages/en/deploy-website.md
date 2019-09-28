## Requirement

You need to have a locomotive running.

You can use the online locomotive demo website [shopinvader.com](https://shopinvader.com) or follow the step in [doc.locomotivecms.com/docs](https://doc.locomotivecms.com/docs) to start your own one

## Website creation

On the websites panel click on `Add a new site`

<img src="/samples/deploy-website/new-site.png" width="400" hight="400">

Enter the name of the website (1) and click on `Create site` (2)

<img src="/samples/deploy-website/site-name.png" width="400" hight="400">

## Website configuration

In the menu  `Site administration`  configure the languages identicaly as in the file `site.yml` of your shopinvader template

<img src="/samples/deploy-website/site-language.png" width="900" hight="300">

## Website deployment

Copy paste the configuration of the deployment file (config/deploy.yml) with the code in the menu `Developers`

<img src="/samples/deploy-website/deploy-code.png" width="900" hight="600">

Deploy the website with the command :

```
wagon deploy production
```

If it worked you should get a result like

<img src="/samples/deploy-website/deploy-result.png" width="900" hight="400">
