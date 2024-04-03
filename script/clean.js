const fse = require('fs-extra');
const path = require('path');

fse.emptyDirSync('build');
fse.emptyDirSync('dist');
