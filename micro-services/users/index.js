require("dotenv").config();

const db = require("./databases/schema_database")("accounts");
require("./databases/table_users")(db);

const app = require("./express/declared-express");

app.listen(app.get("port"), () => {
  console.log(`=> Server: Users online in ${app.get("port")}...`);

  db.sync()
    .then(() => {
      console.log(`=> Database: "${db.config.database}" is connected...`);
    })
    .catch((err) => {
      console.log(err);
    });
});
