/**
 * Created by yujuan on 17-4-8.
 */
var express = require('express');
var app = express();

app.use(require('./controllers'));

app.listen(3000,()=>{
  console.log("Listen to the 3000");
});
