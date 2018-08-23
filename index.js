const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('home'));


var fortune= require('./lib/fortune');
app.get('/about', (req, res)=>{
    res.render('about',{fortune: fortune.getFortune()})
);
    
    app.use(express.static(path.join(__dirname,'/public')));
app.listen(PORT, () => console.log(`express on location ${PORT}`));

/*

app.set('port', process.env.PORT || 4000);


app.get('/', function(req, res){
    res.type('text/plain');
    res.send('mi pagina principal');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('acercade mi pagina');
});



app.get('/about/contact', function(req, res){
    res.type('text/plain');
    res.send('acercade mi pagina');
});


app.use( function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res,  next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server error');
});






app.listen(app.get('port'), function(){
           
           console.log('express on localhost:' + app.get('port'));
    
           });
*/
