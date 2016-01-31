var express = require('express');
var app = express();

//app.engine('jade', require('jade').__express);
//app.engine('html', require('html').__express);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

//app.use('/', express.static('/'));

app.set('view engine', 'html');
/*app.get('/', function(req, res, next){
	res.send('hello world');
});*/
app.get('/', function(req, res, next){
	res.render('index.html');
});
/*app.get('/jade', function(req, res, next){
	res.render('index.jade');
});*/
app.listen(3000);
console.log('Express started on port 3000');