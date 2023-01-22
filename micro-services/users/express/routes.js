const { addUser, removeUser } = require("../databases/controller_users");
const {
  validateSignup,
  validateLogin,
  validateDeleteAccount,
} = require("./validators");
const { createJWTWithUserID, decodeJWT } = require("../jwt/controller-jwt");
const router = require("express").Router();

//send username, email & password in the request body
router.post("/signup", validateSignup, async (rq, rs) => {
  if (!(await addUser(rq.body))) {
    return rs.send("User exist");
  }

  const IDinJWT = await createJWTWithUserID(rq.body);

  if (IDinJWT === null) {
    return rs.send("Error creating token");
  }

  rs.cookie("sessionID", IDinJWT);
  return rs.send("Ok");
});

//send email & password
router.post("/login", validateLogin, async (rq, rs) => {
  const IDinJWT = await createJWTWithUserID(rq.body);

  if (IDinJWT === null) {
    return rs.send("User not exist");
  }

  rs.cookie("sessionID", IDinJWT);
  return rs.send("Ok");
});

//send cookie "sessionid"
router.delete("/account", validateDeleteAccount, async (rq, rs) => {
  const jwtDecode = await decodeJWT(rq.body.sessionid);

  if (jwtDecode === null) {
    return rs.send("Error in token");
  }

  if (typeof jwtDecode.payload.id !== "number") {
    return rs.send("Error wrong payload");
  }

  if (!(await removeUser(jwtDecode.payload))) {
    return rs.send("No deleted user");
  }

  rs.clearCookie("sessionid");
  return rs.send("Ok");
});

module.exports = router;
