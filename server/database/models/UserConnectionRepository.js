const AbstractRepository = require("./AbstractRepository");

class UserConnectionRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "User" as configuration
    super({ table: "admins_App" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new translator to the "translators" table
    const [result] = await this.database.query(
      `insert into ${this.table} (Email, Password) values (?, ?)`,
      [user.Email, user.Password]
    );

    // Return the ID of the newly inserted client
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where Id_User = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all clients from the "CLIENTS" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of admins_App
    return rows;
  }

  // The U of CRUD - Update operation
  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table}  SET Email =?, Password =? where Id_User = ?`,
      [user.Email, user.Password, user.IdUser]
    );
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an User by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} where Id_User = ?`,
      [id]
    );
    return result;
  }
}
module.exports = UserConnectionRepository;
