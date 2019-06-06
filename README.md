# LAB - 08
Project Name: data-modeling
Author: Chloie Parsons

# Description
You have been provided a partially working API server. The assignment for today is to complete the server’s functionality by creating the data models and writing a full test suite.

#Links and Resources
* Submission PR:https://github.com/chloieparsons-401-advanced-javascript/lab-08/pull/2
* Travis:https://www.travis-ci.com/chloieparsons-401-advanced-javascript/lab-08
* Heroku: https://chloieparsons-401-advanced-jav.herokuapp.com/

#Documentation
MonogDB

# Modules
* categories.js
* products.js

# Setup
### .env requirements
* PORT - 8000
* MONGODB_URI - mongodb://localhost:27017/class-08

# Running the app
* npm start

# Tests
* products.test.js (utilizing products-schema.js and the pre-save mondo hook)
* categories.test.js