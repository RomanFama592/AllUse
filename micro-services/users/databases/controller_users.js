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
    where: { username: username, email: email, deleteUser: false },
    defaults: { passwordHash: passwordHash },
  });
  await user.save();

  return created;
}

async function removeUser({ id }) {
  if (typeof id !== "number") {
    return false;
  }
  const rowAffects = Users.update(
    { deleteUser: true },
    {
      where: { id: id, deleteUser: false },
    }
  );

  console.log(await rowAffects > 0)

  return rowAffects > 0;
}

async function getIDUserSecure({ email, password }) {
  const user = await findOneUserByEmail({ email: email });
  if (!(await ComparePasswordOfAUser({ user: user, password: password }))) {
    return null;
  }
  return user.id;
}

function findOneUserByEmail({ email }) {
  return Users.findOne({
    where: { email: email, deleteUser: false },
  });
}

async function ComparePasswordOfAUser({ user, password }) {
  if (user === null) {
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
  findOneUserByEmail,
  getIDUserSecure,
  ComparePasswordOfAUser,
  hashingPassword,
};
