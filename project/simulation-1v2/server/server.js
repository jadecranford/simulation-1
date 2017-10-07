var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var dotenv = require('dotenv');
dotenv.config();

// var app invokes express to be used
var app = express();
var port = 8888;

var BinControllers = require('./controllers/BinControllers')(app);

massive(process.env.DB_CONNECTION_STRING).then(db => {
   console.log('db is connected');
   app.set('db', db);
}).catch(err => {
   console.error(err);
})

app.use(cors());
app.use(bodyParser.json());

app.get('/bins/:shelfletter', BinControllers.read);

app.listen(port, () => {
   console.log('listening on port', port)
});
