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
musicRoutes.post('/song/', controller.createSong);
musicRoutes.post('/album/', controller.createAlbum);

// PUT (update)
musicRoutes.put('/song', controller.updateSongTitle);
// DELETE (delete)

// Export router
module.exports = musicRoutes;