var express = require('express');
var app = express();
var db = require('./db');
module.exports = app;

app.get('/', function(req, res, next){
   res.send('foo'); 
});

app.get('/products', function(req, res, next){
    db.connect(function(conn){
        conn.query('select name from products', [], function(err, result){
            if(err)
                return res.send(err);
            res.send(result.rows);
        })
    });
});