'use strict'

const express = require('express')
const request = require('ajax-request')

const app = express()

// let url = 'http://www.google.com'
// let url = 'https://jsonplaceholder.typicode.com/posts/1'
let url = 'http://localhost:8080/otn/resources/common/menu/MainMenuBeta.json'
// let url = 'http://localhost:4000/gen-ui/'

console.log('url:', url); 

request(url, function(error, response, body) {
	console.log('error:', error); 
	console.log('statusCode:', response && response.statusCode); 
	console.log('body:', body); 
});
 
