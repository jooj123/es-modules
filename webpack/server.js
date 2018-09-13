let express = require('express');
let app = express();
let path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);