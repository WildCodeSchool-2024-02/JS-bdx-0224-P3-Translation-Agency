// Import required dependencies
const { database, tables } = require("../config");

// Import repository classes
const AbstractRepository = require("../../database/models/AbstractRepository");
const ModelDocumentRepository = require("../../database/models/ModelDocumentRepository");

// Test suite for ModelDocumentRepository
describe("ModelDocumentRepository", () => {
  // Test: Check if ModelDocumentRepository extends AbstractRepository
  test("ModelDocumentRepository extends AbstractRepository", async () => {
    // Assertions
    expect(Object.getPrototypeOf(ModelDocumentRepository)).toBe(
      AbstractRepository
    );
  });

  // Test: Check if read method selects data from the 'Model_Docs' table based on id
  test("read => select with Id_Doc", async () => {
    // Mock rows returned from the database
    const rows = [{}];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Call the read method of the modelDocs repository
    const returned = await tables.modelDocs.read(1);
    expect(returned).toStrictEqual(rows[0]);
  });
});
