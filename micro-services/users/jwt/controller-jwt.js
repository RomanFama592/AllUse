const { SignJWT, jwtVerify } = require("jose");
const { getIDUserSecure } = require("../databases/controller_users");

async function createJWTWithUserID({ email, password }) {
  const id = await getIDUserSecure({ email, password });

  if (id === null) {
    return null;
  }

  const jwt = new SignJWT({ id });
  jwt.setProtectedHeader({ alg: "HS256", typ: "JWT" });

  return jwt.sign(new TextEncoder().encode(process.env.JWTKEYPRIVATE));
}

/**
 * retorna un objeto con los parametros payload y headers
 */
function decodeJWT(jwt) {
  try {
    return jwtVerify(
      new TextEncoder().encode(jwt),
      new TextEncoder().encode(process.env.JWTKEYPRIVATE)
    );
  } catch (err) {
    return null;
  }
}

module.exports = { createJWTWithUserID, decodeJWT };
