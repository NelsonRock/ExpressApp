var express =require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 No Found');
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(500);
    res.send('500 Sever Error');
});

app.get('/', function(req, res, next){
	console.log('express is working with supervisor');
	res.send('Express Server is configured');
});

app.listen(app.get('port'), function(){
	console.log('Express is running on http://localhost:'+ app.get('port')+ ' press Ctrl-C to terminate.'
);
});
