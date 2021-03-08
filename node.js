//declare var require : any
var port = 3000;
var express = require('express');
var https = require('https');
var app = express();
var path = require('path');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('index.html'));
app.get('/', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    res.sendFile(path.join(__dirname, 'index.html'));
    //return ;
});
app.post('/Edit', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    // console.log(req.body);
    //res.sendFile( path.join( __dirname,'index.html' ));
    //return ;
    // res.send(200);
    return;
});
app.post('/Delete', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    // console.log(req.body);
    //res.send(200);
    //return ;
    return;
});
app.listen(port, function (err) {
    if (err)
        console.log("Error in server setup");
    console.log("Server listening on Port", port);
});
