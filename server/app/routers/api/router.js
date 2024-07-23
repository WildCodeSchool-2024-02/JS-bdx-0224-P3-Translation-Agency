const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const translatorRouter = require('./translators/translatorRouter')
const estimationRouter = require('./estimations/estimationRouter')

router.use("/items", itemsRouter);
router.use("/translators", translatorRouter)
router.use("/estimations", estimationRouter)

/* ************************************************************************* */

module.exports = router;
