const { db } = require('./db')
const port = process.env.PORT || 3000;
const app = require("./app");

db.sync().then(() => {
    console.log(' ☯ ☯ ☯  ---- db synced ---- ☯ ☯ ☯ ')
  app.listen(port, () => console.log(` 👂 👂 👂  ---- listening on port ${port} ---- 📡 📡 📡  `)); 
});
