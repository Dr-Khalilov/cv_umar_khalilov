const { join } = require('path');
const { createServer } = require('http');
const express = require('express');
const app = express();
const server = createServer(app);

app.get('/', async (req, res, next) => {
    return res.sendFile(join(__dirname, '..', 'public', 'index.html'));
});

app.use('/', express.static(join(__dirname, '..', 'public')));

const port = process.env.SERVER_PORT || 5000;

const bootstrap = async port => {
    try {
        server.listen(port, () => {
            console.info(`Server listening on http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void bootstrap(port);
