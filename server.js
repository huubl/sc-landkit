// // const http = require('http')
const fs = require('fs')
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
let app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.get('/*', (req, res) => {
  fs.readFile(path.join(__dirname, 'dist', 'index.html'), 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
})
const port = process.env.PORT || 80
console.log('I got here now')
app.listen(port)
