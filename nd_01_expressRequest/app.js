const express = require('express')
const request = require('request')

process.env.NO_PROXY='localhost:8080'

const app = express()

// let url = 'http://google.com'
// let url = 'https://jsonplaceholder.typicode.com/posts/1'
let url = 'http://localhost:8080/otn/resources/common/menu/MainMenuBeta.json'

console.log('url:', url); 

var options = {
  url: url,
  headers: {
    'User-Agent': 'request',
	'Content-Type': 'application/x-www-form-urlencoded'
  }
};

request.get(options, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
  
  app.get('/', (req, res) => res.send(body))
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))