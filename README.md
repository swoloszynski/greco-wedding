# greco-wedding

### Deploying to Staging
* The master branch of this repository will automatically be deployed to [GitHub pages](https://pages.github.com/) and can be viewed [here](http://samwolo.com/greco-wedding/).

### Deploying to production

##### Set up
* `npm install`
* DNS records: set `@`, `www`, and `*` CNAME records to `na-west1.surge.sh`
* Use [surge.sh](https://surge.sh/help/getting-started-with-surge) to deploy:
  * Get credentials from local/secrets.txt

  ```
  (greco-wedding) $ surge --domain kateandpatrick.wedding

      Surge - surge.sh

              email: ***********@gmail.com
              token: *****************
       project path: /Users/samw/code/greco-wedding/
               size: 63 files, 6.0 MB
             domain: kateandpatrick.wedding
             upload: [====================] 100%, eta: 0.0s
   propagate on CDN: [============        ] 61% /fonts/bodoni72smallcaps/Bodoni-72-Smallcap   propagate on CDN: [=============       ] 66% /fonts/bodoni72smallcaps/Bodoni-72-Smallcap   propagate on CDN: [====================] 100%
               plan: Free
              users: ***********@gmail.com
         IP Address: 45.55.110.124

    Success! Project is published and running at kateandpatrick.wedding
  ```
