const appetizers = require('../data/appetizers');

exports.getAllAppetizers = (req, res) => {
    res.json(appetizers);
};

exports.getAppetizerById = (req, res) => {
    const appetizer = appetizers.find(a => a.id == req.params.id);
    if (appetizer) {
        res.json(appetizer);
    } else {
        res.status(404).send('Appetizer not found');
    }
};

exports.searchAppetizers = (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = appetizers.filter(appetizer => appetizer.name.toLowerCase().includes(query));
    res.json(results);
};
