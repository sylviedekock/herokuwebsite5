var express = require("express");
var nieuws = express.Router();

nieuws.get('/items/:id', function(req, res) {
  var nieuwsFile = req.app.get('nieuwsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < nieuwsFile.nieuws.length ) {
    if (nieuwsFile.nieuws[teller].id == id) {
      item = nieuwsFile.nieuws[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("nieuws", {
      item: item,
      categorieen: req.app.get('categorieenFile').categorieen,
      landen: req.app.get('landenFile').landen
    });
  } else {
    res.render("404", {
      categorieen: req.app.get('categorieenFile').categorieen,
      landen: req.app.get('landenFile').landen
    });
  }
});

module.exports = nieuws;
