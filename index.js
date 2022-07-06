const { join } = require('path');
const { createServer } = require('http');
const express = require('express');
const app = express();
const server = createServer(app);

app.get('/', (req, res, next) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.use('/', express.static(__dirname + '/public'));

const port = process.env.PORT ?? 5000;
server.listen(port, () =>
    console.info(`Server listening on http://localhost:${port}`));
