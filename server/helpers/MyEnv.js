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

const clientFields = [
  "APP_NAME",
  "APP_ENV",
  "APP_DEBUG",
  "APP_URL",
];

// console.log('loaded env', myEnv);
module.exports = {
  all : () => {
    return myEnv;
  },

  clientFields,

  client : (fields) => {
    let clientOnly = fields === undefined ? clientFields : fields;

    let envClientObj = {};

    clientOnly.map((el) => {
      envClientObj[el] = myEnv[el];
    });

    return envClientObj;
  },
}