var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var dotenv = require('dotenv');
dotenv.config();

// var app invokes express to be used
var app = express();
var port = 8888;

massive(process.env.DB_CONNECTION_STRING).then(db => {
   console.log('db is connected');
}).catch(err => {
   console.error(err);
})

app.listen(port, () => {
   console.log('listening on port', port)
});
