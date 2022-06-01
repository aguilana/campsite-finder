{
  "name": "pairexercise-readiumredux-solution-v2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npm run build-watch & npm run start-server ",
    "build-watch": "webpack -w",
    "start-server": "nodemon --watch server -e js,html server/main.js",
    "seed": "node ./bin/seed"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.1",
    "axios": "^0.27.2",
    "cors": "^2.8.5",
    "nodemon": "^2.0.16",
    "pg": "^8.7.3",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^v8.0.1",
    "react-router-dom": "^6.3.0",
    "sequelize": "^6.20.0",
    "volleyball": "^1.5.1",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  },
  "devDependencies": {
    "@babel/core": "7.17.10",
    "@babel/preset-env": "7.17.10",
    "@babel/preset-react": "7.16.7",
    "@babel/preset-stage-2": "^7.8.3",
    "babel-loader": "8.2.5",
    "lorem-hipsum": "^0.1.7",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.3"
  }
}
