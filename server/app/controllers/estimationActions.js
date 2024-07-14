// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all estimations from the database
    const estimations = await tables.estimation.readAll();

    // Respond with the items in JSON format
    res.json(estimations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific estimation from the database based on the provided ID
    const estimation = await tables.estimation.read(req.params.id);

    // If the estimation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the estimation in JSON format
    if (estimation == null) {
      res.sendStatus(404);
    } else {
      res.json(estimation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the estimation data from the request body
  const estimationBody = req.body;

  try {
    // Insert the estimation into the database
    const insertId = await tables.estimation.create(estimationBody);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted estimation
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the estimation data from the request body
  const estimationBody = req.body;

  try {
    // Insert the estimation into the database
    const modifiedId = await tables.estimation.update(estimationBody);

    // Respond with HTTP 200 (updated) estimation
    res.status(200).json({ modifiedId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract the estimation id from the request params
  const estimationId = req.params.id;

  try {
    // Insert the item into the database
    const deletedId = await tables.estimation.delete(estimationId);

    // Respond with HTTP 204 (deleted) estimation
    res.status(204).json({ deletedId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
