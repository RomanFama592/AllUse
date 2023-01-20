const { validateSignup } = require("./validators");
const CUsers = require("../databases/controller_users");
const router = require("express").Router();

router.post("/signup", validateSignup, async (rq, rs) => {
  if(!await CUsers.addUser(rq.body)){
    return rs.send("not")
  };
  return rs.send("yes")
});

router.post("/login", (rq, rs) => {});

router.put("/changedatauser", (rq, rs) => {});

router.delete("/account", (rq, rs) => {});

module.exports = router;
