const { getGamesAmerica, getGamesEurope, getGamesJapan } = require('nintendo-switch-eshop');

const getAmericanGames = async (shop, limit) => {
    const data = await getGamesAmerica({shop, limit});
    return data;
};

const getEuropeanGames = async (locale, limit) => {
    const data = await getGamesEurope({locale, limit});
    return data;
};

const getJapaneseGames = async () => {
    const data = await getGamesJapan();
    return data;
};

getAmericanGames('ncom', 1);
getEuropeanGames('en', 1);
getJapaneseGames();