// fixtures.js
module.exports = {
    clients: [
      {
        name: 'Client A',
        email: 'clientA@example.com',
        phone: '+1234567890'
      },
      {
        name: 'Client B',
        email: 'clientB@example.com',
        phone: '+0987654321'
      }
    ],
    translators: [
      {
        name: 'Translator A',
        email: 'translatorA@example.com',
        language: 'English'
      },
      {
        name: 'Translator B',
        email: 'translatorB@example.com',
        language: 'French'
      }
    ],
    translationProjects: [
      {
        clientId: 1,
        translatorId: 1,
        DOC: 'Project 1',
        sourceLanguage: 'French',
        targetLanguage: 'English',
        status: 'completed'
      },
      {
        clientId: 2,
        translatorId: 2,
        DOC: 'Project 2',
        sourceLanguage: 'English',
        targetLanguage: 'French',
        status: 'in_progress'
      }
    ]
  };
  