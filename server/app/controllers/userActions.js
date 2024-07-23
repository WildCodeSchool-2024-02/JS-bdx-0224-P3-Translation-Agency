const jwt = require("jsonwebtoken");  
const tables = require("../../database/tables");


// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.item.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const userBody = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(userBody);

    // Respond with HTTP 201 (Created) user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the user data from the request body
  const userBody = req.body;

  try {
    // modifiey the user in the database
    const modifiedId = await tables.user.update(userBody);

    // Respond with HTTP 200 (updated) user
    res.status(200).json({ modifiedId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract the user id from the request params
  const userId = req.params.id;

  try {
    // Insert the user into the database
    const deletedId = await tables.user.delete(userId);

    // Respond with HTTP 204 (deleted) user
    res.status(204).json({ deletedId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

 // Handling login
 const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await tables.user.findOne({ email });
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new Error("Wrong details, please check again.");
    return next(error);
  }

  let token;
  try {
    // Creating jwt token
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
      },
      "secret key appears here",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      email: existingUser.email,
      RoleUser: existingUser.RoleUser,
      token,
    },
  });

  return res;
};

// Handling signup
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await tables.user.create({name, email, password})
  if(!newUser) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
      },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  res.status(201).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.email,
      token,
    },
  });

  return res;
}

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  signup
};

