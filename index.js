const express = require("express")
const fs = require('fs')

const app = express()
PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello world");
})
app.get("/txt", (req, res) => {
    let text = fs.readFileSync("./asset/html.txt", "utf-8")
    res.send(text)
})

app.listen(PORT)