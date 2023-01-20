const db = require("./schema_database")("accounts");
if (!db.models["users"]) {
  require("./table_users.js")(db);
}
const Users = db.models["users"];
const bcrypt = require("bcryptjs");

//TODO: añadir codigos de error

async function addUser({ username, email, password }) {
  const passwordHash = await hashingPassword(password);
  const [user, created] = await Users.findOrCreate({
    where: { username: username, email: email, deleteUser: false },
    defaults: { passwordHash: passwordHash },
  });

  return created;
}

function removeUser(username) {
  const user = Users.update(
    { deleteUser: true },
    {
      where: { username: username, deleteUser: false },
    }
  );

  return user !== null;
}

function findOneUser(username) {
  return Users.findOne({
    where: { username: username, deleteUser: false },
  });
}

async function ComparePasswordOfAUser(username, password) {
  const user = await findOneUser(username);

  if (user !== null) {
    return false;
  }

  return bcrypt.compare(password, user.passwordHash);
}

async function hashingPassword(password) {
  const salt = await bcrypt.genSalt(5);
  return bcrypt.hash(password, salt);
}

module.exports = {
  addUser,
  removeUser,
  findOneUser,
  ComparePasswordOfAUser,
  hashingPassword,
};
