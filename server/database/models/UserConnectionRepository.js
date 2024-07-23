const AbstractRepository = require("./AbstractRepository");

class UserConnectionRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "admins_App" as configuration
    super({ table: "admins_App" });
  }

  // The C of CRUD - Create operation
  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "admins_App" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Email, Password) VALUES (?, ?)`,
      [user.Email, user.Password]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE Id_User = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "admins_App" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET Email = ?, Password = ? WHERE Id_User = ?`,
      [user.Email, user.Password, user.IdUser]
    );
    return result;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE Id_User = ?`,
      [id]
    );
    return result;
  }

  // Finding one user by email and role
  async findOne(obj) {
    // Execute the SQL SELECT query to retrieve a specific user by its email and role
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE Email = ? AND RoleUser = ?`,
      [obj.Email, obj.roleUser]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
}

module.exports = UserConnectionRepository;
