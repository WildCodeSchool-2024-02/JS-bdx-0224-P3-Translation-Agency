const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const translatorRouter = require('./translators/translatorRouter')


router.use("/items", itemsRouter);
router.use("/translators", translatorRouter)

/* ************************************************************************* */

module.exports = router;
