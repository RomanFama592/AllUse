const db = require("./schema_database")("users");
const bcrypt = require("bcryptjs");
const Users = db.model("Users");

//TODO: añadir codigos de error

async function addUser(username, password) {
  const passwordHash = await hashingPassword(password);
  const user = await Users.create({
    username: username,
    passwordHash: passwordHash,
  });

  return user !== null;
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
