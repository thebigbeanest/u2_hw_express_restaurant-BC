const desserts = require('../data/desserts');

exports.getAllDesserts = (req, res) => {
    res.json(desserts);
};

exports.getDessertById = (req, res) => {
    const dessert = desserts.find(d => d.id == req.params.id);
    if (dessert) {
        res.json(dessert);
    } else {
        res.status(404).send('Dessert not found');
    }
};

exports.searchDesserts = (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = desserts.filter(dessert => dessert.name.toLowerCase().includes(query));
    res.json(results);
};