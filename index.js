// Express
const express = require('express');

// PORT
const PORT = 3000;

// Express app
const app = express();

// Express Listen on PORT
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}.`)
});