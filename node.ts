//declare var require : any

const port:number = 3000;
const express = require('express');
const https  = require('https');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : false}));

//app.use(express.static('index.html'));
app.get('/', (req: any, res: any) => { 
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    res.sendFile( path.join( __dirname,'index.html' ));
    //return ;
  })
  app.post('/Edit', (req: any, res: any) => { 
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
   // console.log(req.body);
   //res.sendFile( path.join( __dirname,'index.html' ));
    //return ;
   // res.send(200);
   return ;
  })
  app.post('/Delete', (req: any, res: any) => { 
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
   // console.log(req.body);
    //res.send(200);
    //return ;
    return ;
  })


  

app.listen(port, function(err:string){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", port); 
})