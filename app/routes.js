const express = require('express')
const router = express.Router()
const config = require('./config.js')
const path = require('path');

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

const search = (entry => config.searchResults.find(item => item.nino.toUpperCase() === entry.toUpperCase()));

router.get('*/search-results', (req, res, next) => {
  const query = req.session.data['search-national-insurance'];
  res.locals.result = search(query);
  next();
})

router.get('*/entry/*', (req, res) => {
  res.locals.entry = search(req.params[1]);
  res.render('versions/base/entry.html');
})
// Add your routes here - above the module.exports line


module.exports = router
