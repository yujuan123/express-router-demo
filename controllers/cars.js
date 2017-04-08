/**
 * Created by yujuan on 17-4-8.
 */
var express = require('express');
var router = express.Router();

router.get('/brands', (req, res)=> {
  res.send("Audi");
});

router.get('/models', (req, res)=> {
  res.send("Q7");
});

module.exports = router;


