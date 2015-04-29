var express =require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res, next){
	console.log('express is working');
	res.send('Express Server');
});

app.listen(app.get('port'), function(){
	console.log('Express is running on http://localhost:'+ app.get('port')+ 'press Ctrl-C to terminate.'
);
});
