var express = require("express"),
   
 fs = require('fs'),
   
 port = process.env.PORT || 2595;


var wishlist = [];

var app = express();

//app.use(express.logger());

app.use(express.json());

app.use(express.urlencoded());

app.set("view options", {
    
layout: false
});

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
   
 res.render('public/index.html');
});


app.get('/books', function (req, res) {
    
var books = require('./data/books.json');
   
 res.json(books);
});



app.get('/wishlist', function (req, res) {
   
 res.json(wishlist);
});


app.post('/book', function (req, res) {
   
 var data = {
        'qty': req.body.qty,
        'date': req.body.date,
        'id': req.body.book_id,
        'name': req.body.book_name
    };
   
 wishlist.push(data);
    // res.render('public/tmpl/wishlist.html');
   
 res.json(wishlist);
});


app.listen(port);

console.log('Express server running at http://localhost:' + port);
