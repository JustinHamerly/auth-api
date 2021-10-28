'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { dbAuth } = require('./src/auth/models');

dbAuth.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
