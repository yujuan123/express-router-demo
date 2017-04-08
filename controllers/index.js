/**
 * Created by yujuan on 17-4-8.
 */
var express = require('express');
var router = express.Router();

router.use('/cars', require('./cars'));
router.use('/animals', require('./animals'));

router.get('/',(req,res)=>{
  res.send("this is homePage");
});

module.exports = router;
