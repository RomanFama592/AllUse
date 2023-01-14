require("dotenv").config();

const db = require("./databases/schema_database")(process.env.NAMEDATABASE);
const users = require("./databases/table_users")(db);

const app = require("./express/declared-express");

if (db.error) throw Error(db.error);

app.listen(app.get("port"), () => {
  console.log(`=> Server: Users online in ${app.get("port")}...`);

  db.sync(/* { force: true } */).then((db) => {
    console.log(`=> Database: "${db.config.database}" is connected...`);
  });
});
