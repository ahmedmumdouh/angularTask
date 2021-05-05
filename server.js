// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/my-first-project'));
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+
//     '/dist/my-first-project/index.html'));});


// // const jsonServer = require('json-server');
// // const server = jsonServer.create();
// // const router = jsonServer.router('db.json'); // <== Will be created later
// // const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // <== You can change the port

// // server.use(middlewares);
// // server.use(router);

// app.listen(port);

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-first-project'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-first-project/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);