const db = require("./schema_database")(process.env.NAMEDATABASE);
const bcrypt = require("bcryptjs");
const Users = db.model("Users");

async function addUser({ username, password }) {
  const salt = await bcrypt.genSalt(5);
  const passwordHash = await bcrypt.hash(password, salt);
  return Users.findOrCreate({
    where: { username: username, deleteUser: false },
    defaults: { passwordHash: passwordHash },
  });
}

async function findUser({ username, password }) {
  const user = await Users.findOne({ where: { username: username, deleteUser: false } });
  if(user === null){
    return null
  }
  let comparated = bcrypt.compare(password, user.passwordHash)
}

module.exports = { addUser };
