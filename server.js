const express = require("express")
const app = express()

let http = require('http').createServer(app)
let port = process.env.PORT || 3000

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"))

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/panel', function(req, res) {
  res.sendFile(__dirname + '/views/backend.html')
})
app.get('/logs', function(req, res) {
  res.sendFile(__dirname + '/views/logs.html')
})

//launch the server
http.listen(port, ()=>{
  console.log(`listening on port :${port}`)
})
