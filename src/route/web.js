const {getHomePage, getABC} = require('../controller/homeController')
const express = require('express');
const router = express.Router();


router.get('/', getHomePage)
  
router.get('/abc', getABC)
  
module.exports = router; // export default