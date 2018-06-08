var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// This helps us set up our express server 

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3500; // Sets an initial port. We'll use this later in our listener

// BodyParser helps our server manage the data better

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// routed files

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// This code starts our server 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
