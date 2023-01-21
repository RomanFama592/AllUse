const { SignJWT, jwtVerify } = require("jose");
const CUsers = require("../databases/controller_users");

async function createJWTWithUserID(rq) {
  const id = await CUsers.getIDUserSecure(rq.body);

  if (id === null) {
    return null;
  }

  const jwt = new SignJWT({ id: id });
  jwt.setProtectedHeader({ alg: "HS256", typ: "JWT" });

  return jwt.sign(new TextEncoder().encode(process.env.JWTKEYPRIVATE));
}

function verifyJWT({ sessionid }) {
  try {
    return jwtVerify(
      new TextEncoder().encode(sessionid),
      new TextEncoder().encode(process.env.JWTKEYPRIVATE)
    );
  } catch (err) {
    return null;
  }
}

module.exports = { createJWTWithUserID, verifyJWT };
