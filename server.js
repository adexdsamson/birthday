'use strict';
const express = require('express');
const app = express();



app.set('port', process.env.PORT || 2020);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render("index")
});




app.listen(app.get('port'), () => {});