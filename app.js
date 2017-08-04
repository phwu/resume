var app = require('express')();
var http = require('http').Server(app);

app.set('ip', (process.env.IP || "127.0.0.1"));
app.set('port', (process.env.PORT || 8080));
app.set('path', (process.env.NODE_PATH || __dirname + '/'));
/****************
*
* ROUTING GOODNESS
*
*****************/

// GETs
app.get('/', function(req, res){
  res.sendFile(app.get('path') + 'index.html');
});
app.get('/resources/main.js', function(req, res){
  res.sendFile(app.get('path') + 'main.js');
});
app.get('/resources/style.css', function(req, res){
  res.sendFile(app.get('path') + 'style.css');
});
app.get('/resources/polly.json', function(req, res){
  res.sendFile(app.get('path') + 'polly.json');
});

/****************
*
* ESTABLISH WEB SERVER
*
*****************/
http.listen(app.get('port'), app.get('ip'), function(){
  console.log('listening on *:' + app.get('port'));
});
