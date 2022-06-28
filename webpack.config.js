const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
// const { getRepoRev } = require('./utils');

const myEnvFile = (envPath, outputPath) => {
  // let repoRev = getRepoRev();
  // let fullRepoRev = getRepoRev("full");
  
  try {
    // just check if file exists
    if (!fs.existsSync(envPath)) {
      console.error("cannot build, env file not found:", envPath);
      process.exit(0);
    }
  } catch (err) {
    console.error("cannot build, cannot find or access env file:", envPath, err);
    process.exit(0);
  }

  let parsedEnvFile = JSON.stringify(dotenv.config({
    path: envPath
  }).parsed);

  /**
   * add below the other things you want to push to front-end..
   * they will be accessed via process.env.
   * 
   * example enhancedEnvFile.revision will be visible in front-end as:
   * process.env.revision
   */
  
  console.log("------------------------------");
  console.log("output path", outputPath);
  console.log("------------------------------");

  return parsedEnvFile;
}

module.exports = (env, argv) => {
  let outputPath = "public/js";

  let parsedEnvFile = myEnvFile(".env", outputPath);

  const theConfig = {
    entry: path.join(__dirname, "resources/js", "index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, outputPath),
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          // test: /\.?js$/,
          test: /\.?(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            },
          }
        },
      ]
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: path.join(__dirname, "src", "index.html"),
      // }),
      // new webpack.DefinePlugin({
      //   'process.env': parsedEnvFile
      // })
    ],
  };

  return theConfig;
}