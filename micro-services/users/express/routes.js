const router = require("express").Router();

router.post("/signup", (rq, rs) => {
  rs.send(rq.body);
});

module.exports = router;