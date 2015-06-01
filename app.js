var express = require('express'),
	app = express(), 
	cons = require('consolidate'),
	MongoClient = require('mongodb').MongoClient;
	//Server = require('mongodb').Server;
	var db;
	
	
	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname + "/views");
	
	MongoClient.connect("mongodb://localhost:27017/course", function(err, db){
		
		if(err) throw err;
		
		app.get('/', function(req, res){
		db.collection('hello_mongo_express').findOne({}, function(err, doc){
			if (err) throw err;
			res.render('hello', doc);
			});
		});
		
		
		app.get('*', function(req, res){
		res.send('Page Not Found', 404);
		});
	
		app.listen(3000);
		console.log('Application running on localhost:3000');
	});
	
/* var mongoclient = new MongoClient(new Server("localhost", 27017, { native_parser :true }));
 
	mongoclient.open(function(err, mongoclient){
		this.db = mongoclient.db('course');
		if(err) throw err;
		app.listen(3000);
		console.log('Application running on localhost:8080');
	});
	*/
	
	
	
	
	