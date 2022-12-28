const { db } = require('./db')
const PORT = process.env.PORT || 3000;
const app = require("./app");
const chalk = require('chalk');

db.sync().then(() => {
    console.log(chalk.yellow(' ☯ ☯ ☯  ---- db synced ---- ☯ ☯ ☯ '))
  app.listen(PORT, () => console.log(chalk.green(` 👂 👂 👂  ---- listening on port ${PORT} ---- 📡 📡 📡  `))); 
});
