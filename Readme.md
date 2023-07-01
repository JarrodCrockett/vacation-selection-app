# Meteor-Demo Boilerplate

This template is meant to be used as a starting place for any app-like prototypes. To get started, you're going to create a new repo for your code and then add this repo as an upstream remote. That way you can automagically get any changes we get to the base template.

To get started:

1. Create a new, empty, PRIVATE repo on github in the domesoftware org. Name it using kebab-case.
1. Clone that repo locally
1. Add this meteor-demo repo as an upstream remote:

```
git remote add upstream git@github.com:domesoftware/meteor-demo.git
```

1. Pull down the code from upstream:

```
git pull upstream main
git checkout main
```

1. Change the SEO info in client/main.html head, like title and metadata.
1. Make changes to Home.jsx. You can use Mongo (As shown in SampleDb) or not.
1. If you need settings, like api keys etc, you can create a settings.json file.
1. Push your new thing to your GitHub repo:

```
git push origin main
```

This is a meteor app, so you'll need meteor js installed locally, and then you'll need to `meteor npm i`. To run the app, just `meteor` and then visit http://localhost:3000.

When your app is ready, we'll deploy it to Meteor Galaxy via the GitHub repo and link it on our samples page on the dome.software site. We'll use one of their tiny Mongo dbs and adjust settings as necessary.

Once the app is complete, modify the settings in .deploy/mup.js so that the application has a subdomain like foo.app.dome.software. Then I'll pull the app onto the server and deploy it using `mup`, and before long your app should be happily running on the internet!
