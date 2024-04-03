// This is run before each test in the test suite.  Use this to perform any global setup.
//
// See https://github.com/facebook/jest/issues/3832
require('../shared/jest.setup');
const nock = require('nock');

nock.disableNetConnect();
