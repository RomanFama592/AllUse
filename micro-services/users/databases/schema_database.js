const path = require("path");
const Sequelize = require("sequelize").Sequelize;

function createSequelize(namedatabase) {
  if(typeof namedatabase !== "string"){
    throw new Error(
      `el parametro tiene que ser un string`
    );
  }

  if (!process.env.DB) {
    throw new Error(
      `variable de entorno "DB" no existe, porfavor vaya al archivo ".env" y creela`
    );
  }

  if (process.env.DB === "sqlite") {
    try {
      return new Sequelize(namedatabase, "username", null, {
        dialect: "sqlite",
        storage: path.join(__dirname, `${namedatabase}.sqlite`),
        logging: process.env.LOGGINGDB.toLowerCase() === "true",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  if (!process.env.DBHOST) {
    throw new Error(
      `variable de entorno "DBHOST" no existe, porfavor vaya al archivo ".env" y creela`
    );
  }

  if (!process.env.DBUSER) {
    throw new Error(
      `variable de entorno "DBUSER" no existe, porfavor vaya al archivo ".env" y creela`
    );
  }

  if (!process.env.DBPASSWORD) {
    throw new Error(
      `variable de entorno "DBPASSWORD" no existe, porfavor vaya al archivo ".env" y creela`
    );
  }

  if (process.env.DB === "mysql") {
    try {
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
    } catch (error) {
      throw new Error(error);
    }
  }

  throw new Error(
    `variable de entorno "DB" no esta bien definida, tiene que ser "mysql" o "sqlite"`
  );
}

module.exports = createSequelize;
