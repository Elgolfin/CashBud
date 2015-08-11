var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// respond with "Hello World!" on the homepage
app.get('/database', function (req, res) {
    var list = "";
    fs.readdir(__dirname + "/db", function (err, files) {
        console.log("readdir IN: " + list);
        if (err) return;
        files.forEach(function (f) {
            console.log("forEach: IN: " + list);
            console.log(f);
            list = list + f + "\n";
            console.log(list);
        });
        console.log("readdir OUT: " + list);
    });
    console.log("FINAL: " + list);
    var yo = { a: 1 };
    res.json(yo);
});

// accept POST request on the homepage
app.post('/database', function (req, res) {
    console.log("POST DATABASE");
    var db = new sqlite3.Database('./db/cashbud.sqlite', function (error) { console.log(arguments); });
    db.serialize(function () {
        db.run("CREATE TABLE accounts (id TEXT PRIMARY KEY, name TEXT, code TEXT, type INT, parent TEXT, description TEXT, active, placeholder, hidden)");
    });

    db.close();
    res.send('Got a POST request');
});

// accept POST request on the homepage
app.post('/account', function (req, res) {
    console.log(req.body);
    var db = new sqlite3.Database('./db/cashbud.sqlite', function (error) { console.log(arguments); });

    /*req.body = 
    {
"id": 1,
"name": "Name",
"code": "Code",
"type": "Type",
"parent": 1,
"description": "Description",
"active": true,
"placeholder": true,
"hidden": true
}
    */

    db.run("INSERT INTO accounts ('id', 'name', 'code', 'type', 'parent', 'description', 'active', 'placeholder', 'hidden') VALUES ($id, $name, $code, $type, $parent, $description, $active, $placeholder, $hidden)", {
        $id: req.body.id,
        $name: req.body.name,
        $code: req.body.code,
        $type: req.body.type,
        $parent: req.body.parent,
        $description: req.body.description,
        $active: req.body.active,
        $placeholder: req.body.placeholder,
        $hidden: req.body.hidden
    }, function (error) {
        console.log(arguments); db.close();
        res.send('Got a POST account request');
    });

    
});

// accept PUT request at /user
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
