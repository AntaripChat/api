let express = require('express');
let app = express();

let fs = require('fs');

app.get('/csv', function(req, res) {
    let data = fs.readFileSync('./books.csv', {
        encoding: 'utf-8'
    });
    res.setHeader('content-type', 'text/csv');
    res.attachment(data);
});