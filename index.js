const http = require('http');
const path = require('path');
const { info } = require('console');
const express = require('express');
const app = express();
const server = http.Server(app);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/', express.static(__dirname + '/public'));

const port = process.env.PORT || 5000;

server.listen(port, () => {
  info(`Server listening on ${port}`);
});
