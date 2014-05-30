demo-google-plus-auth
==================
[![Build Status](https://travis-ci.org/pussinboots/demo-google-plus-auth.svg?branch=master)](https://travis-ci.org/pussinboots/demo-google-plus-auth)
[![Dependencies](https://david-dm.org/pussinboots/demo-google-plus-auth.png)](https://david-dm.org/pussinboots/demo-google-plus-auth)
[![heroku](http://heroku-badge.heroku.com/?app=demo-google-plus-auth)](https://demo-google-plus-auth.herokuapp.com/products.html)

 

Simple angularjs application that use [angular-directive.g-signin](https://github.com/sirkitree/angular-directive.g-signin#example) to include the google plus signin button. After a succesful login the basic profile information are called and the email and id are displayed on the Signin Page. It is just a example integration of google plus signin and fetch the basic profile. Its based on client side authentification no server needed. Can be used as an working example for angularjs and google plus signin integration.

Continous Integration
------------
* [travis](https://travis-ci.org/pussinboots/demo-google-plus-auth)

Dependencies
------------
- [angular-directive.g-signin](https://github.com/sirkitree/angular-directive.g-signin#example)

Demo
-------------

live
------

[Google Plus Signi](https://demo-gpa.herokuapp.com/products.html)

local
------

Two ways to run the demo app local one with play or second with nodejs.

Dependencies
* play 2.2.3 (optional)
* nodejs 0.10.28
Start it with play

    play run
    
Then go to
* [Google Plus Signin](http://localhost:9000/products.html)

Start it with nodejs

    node server.js
    
Then go to
* [Google Plus Signin](http://localhost:9000/products.html)

License
--------------

demo-google-plus-auth is released under the [MIT License](http://opensource.org/licenses/MIT).
