const AbstractRepository = require("./AbstractRepository");

class EstimationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "translators" as configuration
    super({ table: "Estimation" });
  }

  // The C of CRUD - Create operation

  async create(estimation) {
    // Execute the SQL INSERT query to add a new translator to the "translators" table
    const [result] = await this.database.query(
      `insert into ${this.table} (Email, Id_Translator,FirstClientName,LastClientName,Language_Doc) values (?, ?, ?, ?, ?)`,
      [
        estimation.Email,
        estimation.Id_Translator,
        estimation.FirstClientName,
        estimation.LastClientName,
        estimation.Language_Doc,
      ]
    );

    // Return the ID of the newly inserted client
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific translator by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where Id_tarification = ?`,
      [id]
    );

    // Return the first row of the result, which represents the client
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all clients from the "CLIENTS" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of clients
    return rows;
  }

  // The U of CRUD - Update operation
  async update(estimation) {
    const [result] = await this.database.query(
      `UPDATE ${this.table}  SET Email =?, Id_Translator  =?,FirstClientName  =?,LastClientName  =?,Language_Doc  =? where Id_Tarification = ? `,
      [
        estimation.Email,
        estimation.Id_Translator,
        estimation.FirstClientName,
        estimation.LastClientName,
        estimation.Language_Doc,
        estimation.IdTarification,
      ]
    );
    return result;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} where Id_Tarification = ?`,
      [id]
    );

    return result;
  }
}

module.exports = EstimationRepository;
