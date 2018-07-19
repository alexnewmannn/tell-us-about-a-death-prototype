const express = require('express')
const router = express.Router()
const config = require('./config.js')
const fs = require('fs');

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

router.get('*/versions*', (req, res, next) => {
  res.locals.version = getVersion(req.params[1]);
  next();
})

const getVersion = ((url, index = 0) => url.slice(1).split('/')[index]);

const handleMissingVersionRoute = (version, route, res) => {
  const fileExists = fs.existsSync(`app/views/${route}`);
  let renderedRoute = route;
  if (!fileExists) {
    renderedRoute = route.replace(version, 'base');
  }
  console.log(renderedRoute)
  // hospital /versions/hospital/check.html
  return res.render(`${renderedRoute.slice(1)}`)
};

router.get('*/check*', (req, res, next) => {
  let version = getVersion(req.params[0], 1);
  return handleMissingVersionRoute(version, `${req.params[0]}/check.html`, res);
})

router.get('*/complete*', (req, res, next) => {
  let version = getVersion(req.params[0], 1);
  return handleMissingVersionRoute(version, `${req.params[0]}/complete.html`, res);
})

router.get('*/deceased-trace', (req, res, next) => {
  res.locals.startTab = 'trace';
  res.render(req.params[0].slice(1));
})

router.get('*/deceased-details', (req, res, next) => {
  res.locals.startTab = 'details';
  res.render(req.params[0].slice(1));
})

router.get('*/caller', (req, res, next) => {
  res.locals.startTab = 'caller';
  res.render(req.params[0].slice(1));
})

router.get('*/entry/*', (req, res) => {
  res.locals.entry = search(req.params[1]);
  res.render('versions/base/entry.html');
})
// Add your routes here - above the module.exports line


module.exports = router
