const wineData = require('./wine-data');

exports.getPairings = (food) => {
    recommendedWines = wineData.filter((wine) => wine.pairings.includes(food));
    recommendedJsonData = {
        "food": food,
        "matches": recommendedWines
    }
    return recommendedJsonData;
};