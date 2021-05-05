const jsonServer = require('json-server');
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-first-project'));


app.use(middlewares);
app.use('', router);

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-first-project/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);