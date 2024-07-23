const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const ClientSeeder = require("./ClientSeeder");
const TranslatorSeeder = require("./TranslatorSeeder");

class ModelDocumentSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "Model_docs",
      truncate: true,
      dependencies: [ClientSeeder, TranslatorSeeder],
    });
  }

  // The run method - Populate the 'Model_docs' table with fake data

  run() {
    // Generate and insert fake data into the 'Model_docs' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake model doc data
      const fakeDoc = {
        TypeDocument: `typeDoc${i}`,
        LanguageSource: `lang${i}`,
        Status: "V",
        PathUploadedFile: `c:\\fakedossier${i}`,
        IdClient: this.getRef(`client_${i}`).insertId,
        idTranslator: this.getRef(`translator_${i}`).insertId,
        refName: `docs_${i}`,
      };

      // Insert the fakeDoc data into the 'Model_docs' table
      this.insert(fakeDoc); // insert into Model_docs(Type_Doc,Languages_source,Status,Real_Path_Emplacement,Id_Client,Id_Translator) values (?, ?, ?, ?, ?, ?)
    }
  }
}

// Export the ModelDocumentSeeder class
module.exports = ModelDocumentSeeder;
