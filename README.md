## Rest API
### This Repo covers REST API with Node.js and Express and CRUD API - backend
* API - Application Programming Interface
    - It is a set of rules that allows programs to talk to each other
    - The developer creates the API on the server and allows the client to talk to it

* REST - determines how the API looks like
    * REST - Representational State Transfer
     - It is a set of rules developers follow when they create their API

* For building our API we follow: CRUD - Create - Read - Update - Delete
   

* Node.js: 
    - It is a js run time and all it does is allows js to run in places other than the chrome or other browsers.. like we can run it in our console or terminal.
    - we can use that to create server side js applications

* Express: 
    - Framework for Node.js. It helps us to create different routes for our API

* Postman: 
    - Helps us to make different requests to our API's so that we can test all our endpoints.

* json: javascript object notation 
    - It is a common format for sending and requesting data through a RESTAPI
    - app.use(bodyParser.json()); - means we are using json data in our whole application

* nodemon: 
    - Nodemon keeps making changes whenever we save a file

### Initializing backend javascript application
    - `mynotes.js` file

`Endpoints to check in postman`
#### //==============  5 Routes  ===============//

    GET       /users         finds all users
    POST      /users         creates a user
    GET       /users/:id     finds user details by id
    DELETE    /users/:id     deletes a user by id
    PATCH     /users/:id     updates a user by id


###  `npm start` to run the server on http://localhost:5000
