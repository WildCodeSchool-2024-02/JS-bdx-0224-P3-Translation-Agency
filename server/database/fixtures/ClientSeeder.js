const AbstractSeeder = require('./AbstractSeeder');
const { clients } = require('./fixtures');

class ClientSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'client', truncate: true });
  }

  run() {
    clients.forEach(client => {
      this.insert(client);
    });
  }
}

module.exports = ClientSeeder;
