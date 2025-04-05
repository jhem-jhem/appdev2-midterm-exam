const url = require('url');

const address = 'https://www.example.com:8080/products?category=electronics&sort=price';

const parsedUrl = new URL(address);

console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Pathname:', parsedUrl.pathname);  
console.log('Query Parameters:', parsedUrl.search);   
