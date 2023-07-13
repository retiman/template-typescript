const fse = require('fs-extra');
const path = require('path');

fse.emptyDirSync('build');
fse.emptyDirSync('dist');
fse.emptyDirSync(path.join('test', 'unit', 'coverage'));
fse.emptyDirSync(path.join('test', 'unit', 'integration'));
