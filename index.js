'use strict';

require('dotenv').config();

const app = require('./auth-server/src/server.js');
const { dbAuth } = require('./auth-server/src/auth/models');

const { db } = require('./api-server/src/models');
const server = require('./api-server/src/server.js');

db.sync().then(() => {
  server.start(3000);
});

dbAuth.sync().then(() => {
  app.start(process.env.PORT || 3001);
});