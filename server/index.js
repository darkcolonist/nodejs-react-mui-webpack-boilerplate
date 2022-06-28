/**
 * this file cannot be run directly, make sure you run it via
 * npm run serve at the root project directory
 */
require('process').chdir('server/'); 
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const path = require('path');
require('log-timestamp');

const myEnv = require('./helpers/MyEnv');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static('../public'));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

/**
 * final catch-all route to index.html defined last
 * this is so that react will handle all front-ends
 */
app.get('/*', (req, res) => {
  // res.sendFile(path.resolve(__dirname + '/index.html'));
  res.render('index', {
    env: myEnv,
    envString: JSON.stringify(myEnv)
  });
})

app.listen(myEnv.PORT, () => {
  console.log(`${myEnv.APP_NAME} listening on port ${myEnv.PORT}`)
});