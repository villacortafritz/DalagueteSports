const express = require("express");
const router = express.Router();

//@route GET api/post
//@desc Test route
//@access PUBLIC

router.get("/", (req, res) => res.send("Post route"));

module.exports = router;
