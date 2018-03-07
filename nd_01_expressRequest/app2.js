'use strict'
const express = require('express')
const request = require('request')

const app = express()

process.env.NO_PROXY='localhost:8080'

// let url = 'http://google.com'
// let url = 'https://jsonplaceholder.typicode.com/posts/1'
let url = 'http://localhost:8080/otn/resources/common/menu/MainMenuBeta.json'
// let url = 'http://135.88.72.148:8080/otn/resources/common/menu/MainMenuBeta.json'
// let url = 'http://localhost:4000/gen-ui/'

console.log('url:', url)

request.debug = true

var options = {
  url: url,
  headers: {
	'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36'
  }
};

request.get(options, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});
