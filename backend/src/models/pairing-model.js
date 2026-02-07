const wineData = require('./wine-data');

exports.getPairings = (food) => {
    recommendedWines = wineData.filter((wine) => wine.foodPairings.includes(food));
    return recommendedWines;
};