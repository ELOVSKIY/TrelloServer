const express = require("express")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('data/db.json')
const db = low(adapter)
const app = express()
const port = 300

app.use(express.static("public"));

db.defaults({boards: [], tasks: []})
    .write()

function createBoard(name) {
    db.get("boards")
        .push(
            {
                name: name,
                tasks: []
            })
        .write()
}


app.get('/', (req, res) => {
    res.sendFile("public/html/index.html")
    // res.send('Hello World!')
})

app.post('/add/board', (req, res) => {
    let boardName = req.params.name
})

app.post('/add/task', (req, res) => {

})

app.get('/board', (req, res) => {
    createBoard("kurwa")
    res.send('World!')
})

app.get('/task', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
