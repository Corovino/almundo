'use strict';

const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`Api rest almundo test start in ${app.get('port')}`));