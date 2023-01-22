const db = require("./schema_database")("accounts");
if (!db.models["users"]) {
  require("./table_users")(db);
}
const Users = db.models["users"];
const bcrypt = require("bcryptjs");

//TODO: añadir codigos de error

async function addUser({ username, email, password }) {
  const passwordHash = await hashingPassword(password);
  const [user, created] = await Users.findOrCreate({
    where: { username, email, deleteUser: false },
    defaults: { passwordHash },
  });
  await user.save();

  return created;
}

async function removeUser({ id }) {
  const [affectedCount] = await Users.update(
    { deleteUser: true },
    {
      where: { id, deleteUser: false },
    }
  );
  return affectedCount > 0;
}

async function getIDUserSecure({ email, password }) {
  const user = await findOneUserByEmail({ email });
  if (user === null) {
    return null;
  }
  if (!(await ComparePasswordOfAUser({ user, password }))) {
    return null;
  }
  return user.id;
}

function findOneUserByEmail({ email }) {
  return Users.findOne({
    where: { email, deleteUser: false },
  });
}

async function ComparePasswordOfAUser({ user, password }) {
  return bcrypt.compare(password, user.passwordHash);
}

async function hashingPassword(password) {
  const salt = await bcrypt.genSalt(5);
  return bcrypt.hash(password, salt);
}

module.exports = {
  addUser,
  removeUser,
  findOneUserByEmail,
  getIDUserSecure,
  ComparePasswordOfAUser,
  hashingPassword,
};
