var express = require("express");
var router = express.Router();
var app = express();

var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended : true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'))

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/api/cuadros/:id', function (req, res, next) {
    var req_param = req.params.id;
    res.send('En unos momentos le estaremos enviado la tabla con ID: '+req_param);
});

app.listen(port);

console.log("Servidor Express escuchando en modo %s", app.settings.env);