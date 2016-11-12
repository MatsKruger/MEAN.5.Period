var express = require('express')
var router = express.Router()
var getRandomsObj = require('../excercises/ex1')
var getAlbums = require('../excercises/ex2')
var getJokes = require('../excercises/ex3')

function isAuthenticated (req, res, next) {
  req.testAccess = 'Test'
  next()
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.get('/api/joke/random', isAuthenticated, function (req, res, next) {
  console.log(req.testAccess)
  res.json({
    id: '99',
    joke: 'Haha!'
  })
})
router.get('/api/securerandoms', function (req, res, next) {
  getRandomsObj().then(json => {
    res.json(json)
  })
})

router.get('/api/albumthreewords', function (req, res, next) {
  getAlbums().then(json => {
    res.json(json)
  })
})

router.get('/api/albums/:words', function (req, res, next) {
  getAlbums(req.params.words).then(json => {
    res.json(json)
  })
})

router.get('/api/jokes/', function (req, res, next) {
  getJokes().then(json => {
    res.json(json)
  })
})

module.exports = router
