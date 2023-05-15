const { bollywood, hollywood, allData, latestData, topPost } = require("../Controller/data"); // importing function from data.js

const router = require("express").Router();

router.get("/alldata",allData)
router.get("/latestdata",latestData)
router.get("/toppost",topPost)
router.get("/:category",bollywood) // rouing paths to functions


module.exports = router


//c post
//r get
//u put/patch
//d delete