// API - Application Programming Interface
// - it is a set of rules that allows programs to talk to each other
// - the developer creates the API on the server and allows the client to talk to it

// REST - determines how the API looks like
// REST - Representational State Transfer
// - it is a set of rules developers follow when they create their API

// CRUD - Create - Read - Update - Delete
// - it is another set of rules we follow when building our API

//Node.js: it is a js run time and all it does is allows js to run in places 
// other than the chrome or other browsers.. like we can run it in our console or terminal.
// we can use that to create server side js applications

//Express: framework for Node.js. It helps us to create different routes for our API

//Postman: Helps us to make different requests to our API's so that we can test all our endpoints.

//json: javascript object notation 
//and it is a common format for sending and requesting data through a RESTAPI
//app.use(bodyParser.json()); - means we are using json data in our whole application

//nodemon: nodemon keeps making changes whenever we save a file

//Initializing backend javascript application
// 1. npm init -y (press enter)
// - this creates empty package.json file
// 2. installing express: npm install --save express (press enter)
// now we can do imports n exports in index.js file
// 3.checking node version: node -v. 
// you get the version if node is installed.. now goto 
// 4. go to package.json and add the below line to allow us to do imports
// In line 6 or below "main": "index.js",.. add this:  "type": "module",
// 5. $ node index.js
//Server running on port: http://localhost:5000
// 6. npm install --save-dev nodemon
// why do we use the dev..??
//when ever we push or publish our application no one is gonna be running our server
// so we are installing this dependency only for our own development purposes and 
//it cannot be used later hence dev dependency
// now in package.json u can see dependency - express and devdependencies - nodemon
// now to start the Script in package.json go to line 7 or Scripts and edit the test line like so:
// "start": "nodemon index.js"

//===============   basic server setup is done    =============

//now if we click on the link localhost:5000 we get an error.. that's becoz we did not create the routes
//so in index.js
//ctrl + C to stop server
// '/' - path: root page or generally means a home page

//==============  5 Routes   =========//
// GET       /users         finds all users
// POST      /users         creates a user
// GET       /users/:id     finds user details by id
// DELETE    /users/:id     deletes a user by id
// PATCH     /users/:id     updates a user by id

//index.js file only to set up our server
// Inorder to create routes : we create a new folder routes