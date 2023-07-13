const _ = require('../shared/jest.setup');
const fs = require('fs');

if (!fs.existsSync('.env')) {
  throw new Error('Create a .env file in the project root directory (use env.sample as an example).');
}
