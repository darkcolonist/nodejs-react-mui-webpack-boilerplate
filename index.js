const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

/**
 * final catch-all route to index.html defined last
 * this is so that react will handle all front-ends
 */
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})