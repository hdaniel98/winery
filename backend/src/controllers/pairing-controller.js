const pairingModel = require('../models/pairing-model');

exports.getWinePairing = (req, res) => {
    const food = req.query.food;
    const winePairings = pairingModel.getPairings(food);
    res.json(winePairings);
};