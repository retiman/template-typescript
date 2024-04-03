// This is run before each test in the test suite.  Use this to perform any global setup.
//
// See https://github.com/facebook/jest/issues/3832
require('../shared/jest.setup');
const fs = require('fs');

if (!fs.existsSync('.env')) {
  fs.copyFileSync('.env.sample', '.env');
  throw new Error('No .env file exists.  A sample file has been created for you; please fill in the details.');
}
