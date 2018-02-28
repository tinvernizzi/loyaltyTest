'use strict';

const { Router } = require('express');

const ridersRouter = require('./riders');

module.exports = function addRouter(app) {
  const router = Router();
  router.use('/riders', ridersRouter);
  app.use('/api', router);
};
