module.exports = function(app, conn){
  var express = require('express');
  var router = express.Router();

  /* root */
  router.get('/', (req, res) => {
    res.render('news/index');
  });

  /*baking*/
  router.get('/baking', (req, res) => {
    res.render('news/baking');
  });

  /*surfing*/
  router.get('/surfing', (req, res) => {
    res.render('news/surfing');
  });

  /*drawing*/
  router.get('/drawing', (req, res) => {
    res.render('news/drawing');
  });

  return router;
};
