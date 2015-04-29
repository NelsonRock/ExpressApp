var express =require('express');
var app = express();

/*Setting handlebars for views*/
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('home');
});
        
app.get('/about', function(req, res){
   res.render('about'); 
});


app.use(function(req, res){
    res.status(404);
    res.render('notfound');
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
