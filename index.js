const express = require('express')
const BodyParser = require("body-parser");
const app = express()
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

app.get('/', (req, res) => {
    let stringReturn = '<h1>Full Cycle</h1></br>';
    const connection = mysql.createConnection(config)
    connection.query("SELECT * FROM people", function sync (err, result, fields) {
        if (err) throw err;
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            console.log(row.name)
            stringReturn += `<p>Id: ${row.name} - Name: ${row.name}</p>`
        });
        res.send(stringReturn)
    });
    connection.end()
})

app.post('/people', (req, resp) => {
    const body = req.body;
    save(body.name)
    resp.send("People save successfully");
});

function save(name) {
    if (name) {
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people(name) values('${name}')`
        connection.query(sql)
        connection.end()
    }
}

function save(name) {
    if (name) {
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people(name) values('${name}')`
        connection.query(sql)
        connection.end()
    }
}

app.listen(port, () => {
    console.log('listen port' + port)
})