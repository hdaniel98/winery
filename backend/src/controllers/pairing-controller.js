const pairingModel = require('../models/pairing-model');

exports.getWinePairing = (req, res) => {
    // No input value
    if (!req.query.food) {
        return res.status(400).json({ error: "Food query is required" });
    }

    const food = req.query.food.toLowerCase();
    const winePairings = pairingModel.getPairings(food);

    // no results returned
    if (winePairings.length === 0) {
        return res.status(404).json({ message: "No wines found for that food" });
    }

    res.json(winePairings);
};