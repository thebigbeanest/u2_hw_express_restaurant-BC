const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

const appetizersController = require('./controllers/appetizersController');
const entreesController = require('./controllers/entreesController');
const dessertsController = require('./controllers/dessertsController');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Appetizers routes
app.get('/api/appetizers', appetizersController.getAllAppetizers);
app.get('/api/appetizers/:id', appetizersController.getAppetizerById);
app.get('/api/search/appetizers', appetizersController.searchAppetizers);

// Entrees routes
app.get('/api/entrees', entreesController.getAllEntrees);
app.get('/api/entrees/:id', entreesController.getEntreeById);
app.get('/api/search/entrees', entreesController.searchEntrees);

// Desserts routes
app.get('/api/desserts', dessertsController.getAllDesserts);
app.get('/api/desserts/:id', dessertsController.getDessertById);
app.get('/api/search/desserts', dessertsController.searchDesserts);

// Fallback route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});