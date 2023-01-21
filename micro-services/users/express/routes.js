const CUsers = require("../databases/controller_users");
const { validateSignup, validateLogin } = require("./validators");
const { createJWTWithUserID, verifyJWT } = require("../jwt/controller-jwt");
const router = require("express").Router();

//send username, email & password in the request body
router.post("/signup", validateSignup, async (rq, rs) => {
  if (!(await CUsers.addUser(rq.body))) {
    return rs.send("User exist");
  }

  const jwtID = await createJWTWithUserID(rq);

  if (jwtID === null) {
    return rs.send("Error creating token");
  }

  rs.cookie("sessionID", jwtID);
  return rs.send("Ok");
});

//send email & password
router.post("/login", validateLogin, async (rq, rs) => {
  const jwtID = await createJWTWithUserID(rq);

  if (jwtID === null) {
    return rs.send("User not exist");
  }

  rs.cookie("sessionID", jwtID);
  return rs.send("Ok");
});

router.put("/changedatauser", (rq, rs) => {});

//send cookie sessionid
router.delete("/account", async (rq, rs) => {
  const jwtDecode = await verifyJWT(rq.body);

  if (jwtDecode === null) {
    return rs.send("Error in token");
  }

  if (!(await CUsers.removeUser(jwtDecode.payload))) {
    return rs.send("No deleted user");
  }

  rs.clearCookie(sessionid);
  return rs.send("Ok");
});

module.exports = router;
