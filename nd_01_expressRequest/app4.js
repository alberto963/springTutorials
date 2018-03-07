'use strict'
process.env.NO_PROXY='localhost:8080'

// let url = 'http://www.google.com'
// let url = 'https://jsonplaceholder.typicode.com/posts/1'
//let url = 'http://localhost:8080/otn/resources/common/menu/MainMenuBeta.json'
let url = 'http://localhost:8080/otn/resources/common/menu/'
// let url = 'http://localhost:4000/gen-ui/'

console.log('url:', url); 

var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/MainMenu.json', proxy(url));

app.use('/', proxy(url, {
  filter: function(req, res) {
	console.log('req.method:', req.method); 
    return req.method == 'GET';
}}));
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
