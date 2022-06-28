const dotenv = require('dotenv');
const fs = require('fs');

const envPath = "../.env";

if (!fs.existsSync(envPath)) {
  console.error("cannot build, env file not found:", envPath);
  process.exit(0);
}

const myEnv = dotenv.config({
  path: envPath
}).parsed;

console.log('loaded env', myEnv);
module.exports = myEnv;