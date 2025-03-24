const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersAppRouter = require("./users/userAppRouter");
const clientsRouter = require("./clients/clientRouter");
const translatorsRouter = require("./translators/translatorRouter");
const estimationsRouter = require("./estimations/estimationRouter");
const modelDocumentRouter = require("./ModelDocs/modelDocumentRouter");

router.use("/users", usersAppRouter);
router.use("/clients", clientsRouter);
router.use("/translators", translatorsRouter);
router.use("/estimations", estimationsRouter);
router.use("/documents", modelDocumentRouter);

/* ************************************************************************* */

module.exports = router;
