const AbstractSeeder = require('./AbstractSeeder');
const { translators } = require('./fixtures');

class TranslatorSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'translator', truncate: true });
  }

  run() {
    translators.forEach(translator => {
      this.insert(translator);
    });
  }
}

module.exports = TranslatorSeeder;
