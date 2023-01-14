const path = require("path")
const Sequelize = require("sequelize").Sequelize;

function createSequelize(namedatabase) {
  if (!process.env.DB) {
    return {
      error: `variable de entorno "DB" no existe, porfavor vaya al archivo ".env" y creela`,
    };
  }

  if (process.env.DB === "sqlite") {
    return new Sequelize(namedatabase, "username", null, {
      dialect: "sqlite",
      storage: path.join(__dirname, `${namedatabase}.sqlite`),
      logging: process.env.LOGGINGDB.toLowerCase() === "true",
    });
  }

  if (!process.env.DBHOST) {
    return {
      error: `variable de entorno "DBHOST" no existe, porfavor vaya al archivo ".env" y creela`,
    };
  }

  if (!process.env.DBUSER) {
    return {
      error: `variable de entorno "DBUSER" no existe, porfavor vaya al archivo ".env" y creela`,
    };
  }

  if (!process.env.DBPASSWORD) {
    return {
      error: `variable de entorno "DBPASSWORD" no existe, porfavor vaya al archivo ".env" y creela`,
    };
  }

  if (process.env.DB === "mysql") {
    return new Sequelize(
      namedatabase,
      process.env.DBUSER,
      process.env.DBPASSWORD,
      {
        host: process.env.DBHOST,
        dialect: "mysql",
        logging: process.env.LOGGINGDB.toLowerCase() === "true",
      }
    );
  }

  return {
    error: `variable de entorno "DB" no esta bien definida, tiene que ser "mysql" o "sqlite"`,
  };
}

module.exports = createSequelize;
