var express = require("express");
var path = require("path");
var app = express();

app.set('nieuwsFile', require('./data/nieuws.json'));
app.set('categorieenFile', require('./data/categorieen.json'));
app.set('landenFile', require('./data/landen.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.use(require("./routes/root_router"));
app.use(require("./routes/nieuws_router"));
app.use(require("./routes/categorieen_router"));
app.use(require("./routes/landen_router"));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
