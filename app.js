var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));
/****************
*
* ROUTING GOODNESS
*
*****************/

// routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/main.js', function(req, res){
  res.sendFile(__dirname + '/main.js');
});
app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/style.css');
});
app.get('/polly.json', function(req, res){
  res.sendFile(__dirname + '/polly.json');
});

/****************
*
* ESTABLISH WEB SERVER
*
*****************/

// let's listen
http.listen(app.get('port'), function(){
  console.log('listening on *:' + app.get('port'));
});
