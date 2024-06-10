const entrees = require('../data/entrees');

exports.getAllEntrees = (req, res) => {
    res.json(entrees);
};

exports.getEntreeById = (req, res) => {
    const entree = entrees.find(e => e.id == req.params.id);
    if (entree) {
        res.json(entree);
    } else {
        res.status(404).send('Entree not found');
    }
};

exports.searchEntrees = (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = entrees.filter(entree => entree.name.toLowerCase().includes(query));
    res.json(results);
};