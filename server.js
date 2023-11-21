var bodyParser = require("body-parser");
var express = require("express");
const requester = require('request');

var app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw());
app.set('port', process.env.PORT);

app.post("/",function (req, res) {
 req.headers["true-client-ip"]=req.headers["x-forwarded-for"].split(",")[0]
var head=req.headers;
 var headerss=JSON.stringify(head).replace("'{","").replace("}'","").replace("host","hello").replace("content-length","content2")
 try{
 requester.post({
    headers:JSON.parse(headerss),
    url:     'http://185.236.78.71',
    body:   req.body,
    json: true
  }).pipe(res)
 }catch{
res.sendStatus(400);  
 }

});

app.listen(process.env.PORT, "0.0.0.0", function() {
    console.log(app.get('port'))
    console.log("Starting listen...");
});
