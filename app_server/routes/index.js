var express = require('express');
var router = express.Router();
//import controller
const controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.index) //Anonymous function -executes when get request to root comes in


module.exports = router;
