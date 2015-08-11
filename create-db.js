var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/cashbud.sqlite');

db.serialize(function () {
    db.run("CREATE TABLE accounts (id TEXT PRIMARY KEY, name TEXT, code TEXT, type INT, parent TEXT, description TEXT, active, placeholder, hidden)");

    /*var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    INSERT INTO employees VALUES (1,'JOHNSON','ADMIN',6,'1990-12-17',18000,NULL,4);
    stmt.finalize();
  */

    /*
        db.run("INSERT INTO artist ('ArtistId','Name') VALUES ($id,$name)", {
            $id: 999,
            $name: "Nico"
        });
        
        db.each("SELECT * FROM Artist", function(err, row) {
            console.log(row.ArtistId + ": " + row.Name);
        });
        */

    db.each("SELECT * FROM sqlite_master ", function (err, row) {
        console.log(row.type.toUpperCase() + ": " + row.name);
        //console.log(row);
    });


});

db.close();
