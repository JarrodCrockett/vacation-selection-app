# Meteor-Demo Boilerplate

This template is meant to be used as a starting place for any app-like prototypes. To get started, you're going to create a new repo for your code and then add this repo as an upstream remote. That way you can automagically get any changes we get to the base template.

To get started:

1. Fork this repo. Name the fork using kebab-case.
1. Clone your new repo locally.
1. Change the SEO info in `client/main.html` head, like title and metadata.
1. Make changes to `imports/ui/Home.jsx`. You can use Mongo (As shown in SampleDb) or not.
1. If you need settings, like api keys etc, create a local settings.json file. It will be gitignored.
1. If this is just a post, put its content in `imports/ui/Info.jsx`. Otherwise create a new component and add it to `Home.jsx`.

This is a meteor app, so you'll need node 14 and meteor js installed locally, and then you'll need to:

1. `meteor npm i`
1. `meteor` and then visit http://localhost:3000.

Once the app is complete, modify the settings in .deploy/mup.js so that the application has a subdomain like foo.app.dome.software. Then I'll pull the app onto the server and deploy it using `mup`, and before long your app will be happily running on the internet!
