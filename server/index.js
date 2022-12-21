const { db } = require('./db')
const PORT = process.env.PORT || 3000;
const app = require("./app");

db.sync().then(() => {
    console.log(' ☯ ☯ ☯  ---- db synced ---- ☯ ☯ ☯ ')
  app.listen(PORT, () => console.log(` 👂 👂 👂  ---- listening on port ${PORT} ---- 📡 📡 📡  `)); 
});
