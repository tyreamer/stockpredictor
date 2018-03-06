var express = require('express')
var app = module.exports = express.createServer();
var fs = require('fs');
var csv = require('fast-csv')
var Baby = require('babyparse')

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});

app.get('/', function(){
    res.render('index', {option: 'value'});
});


$('#buttonAddCSV').on('click', addCSV);

function addCSV(event) {
    var csv = document.getElementById('csv').files[0];

    if (!$('#csv')[0].files.length) {
        alert("Please choose at least one file to parse.");
    }

    Baby.parse({
        header: true
    });

    console.log(csv);
};