const request = require('supertest');
const app = require('../index');  // Importer l'app, mais le serveur ne sera pas démarré

describe('Test /new-feature route', () => {
  it('should return "New Feature Added!"', async () => {  // Mise à jour du message attendu
    const response = await request(app).get('/new-feature');
    expect(response.text).toBe('New Feature Added!');
  });
});
