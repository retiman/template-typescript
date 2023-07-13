const fse = require('fs-extra');
const path = require('path');

// The tsc compiler doesn't do any advanced file manipulation as part of the compilation process, and it likely never
// will.  If we want tests omitted from being packed, we have to do it ourselves.
//
// See https://github.com/Microsoft/Typescript/issues/30835
fse.emptyDirSync('dist');
fse.copySync(path.join('build', 'src'), 'dist');
