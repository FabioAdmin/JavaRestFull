const express = require("express");
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
	
consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', ()=>{

	console.log('servidor rodando');

});

/* let server = http.createServer((req, res)=>{
	console.log("URL", req.url);
	console.log("METHOD", req.method);

	switch (req.url){
		case "/":
			res.statusCode = 200;
			res.setHeader('content-type', 'text/html');
			res.end('<h1>Ola</h1>');
		break;

		case '/users':
			res.statusCode = 200;
			res.setHeader('content-type', 'application-/json');
			res.end(JSON.stringify({
				users:[{
					name:'Fabio',
					email:'fabio@yahoo.com.br',
					id:'1'
				}]
			}));
		break;
	}

});*/

