const express = require("express");

const app = express();
// app.use(checkPer);
app.get("/books", (req, res) => {
  return res.send({ route: "/books"});
});

app.get("/libraries",checkPer, (req, res) => {
  return res.send({ route: "/libraries", permission: true});
});

app.get("/authors",checkPer, (req, res) => {
  return res.send({ route: "/authors", permission: true});
});
logDin();
function logDin(role){
 return function checkPer(req,res,next){
   if(role === "seller"){
       return next();
   }
   return res.send("Not allowe");
 };
}

function checkPer(req,res,next){
  if(req.path==="/libraries"){
    req.role =  "libraries"; 
  }else  if(req.path==="/authors"){
    req.role =  "authors"; 
  }else{
    req.role="help";
  }
  console.log("call me");
  next();
}

app.listen(8080, () => {
  console.log("I am working proparly");
});












