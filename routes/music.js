// Express
const express = require('express');

// Router
const Router = express.Router;

// Create the Router
const musicRoutes = Router();

// import Controller
const controller = require('../controllers/music')

// Handlers for Router
// GET (retrieve)
musicRoutes.get('/', controller.retrieveAll);

// POST (create)
// PUT (update)
// DELETE (delete)

// Export router
module.exports = musicRoutes;