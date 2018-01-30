// PULL IN REQUIRED DEPENDENCIES

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false

}));

//override with POST having ?_method = DELTE
app.use(methodOverride('_method'));

//handlebars
let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');


//Import routes and give the server across to them
let routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

let PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log("App listening on PORT " + PORT);