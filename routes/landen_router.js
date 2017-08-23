var express = require("express");
var landen = express.Router();

landen.get('/landen/:id', function(req, res) {
  res.render("land", {
      id: Number(req.params.id),
      items: req.app.get('nieuwsFile').nieuws,
      categorieen: req.app.get('categorieenFile').categorieen,
      landen: req.app.get('landenFile').landen
  });
});

module.exports = landen;
