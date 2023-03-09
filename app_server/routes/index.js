var express = require('express');
var router = express.Router();
//import controller
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index) //Anonymous function -executes when get request to root comes in


module.exports = router;
