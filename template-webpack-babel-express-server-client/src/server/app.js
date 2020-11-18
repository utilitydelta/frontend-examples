const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const appExpress = express();
const http = require('http').Server(appExpress);

appExpress.use(express.static('public/'));

http.listen(port, hostname, function () {
    console.log(`listening on ${hostname}:${port}`);
});