import { getShopsByCountryCodes } from '../lib';

// const runAmerica = async () => {
//     const data = JSON.stringify(await getGamesAmerica({shop: 'ncom', limit: 5}));
//     console.log(data);
// };
//
// runAmerica();

// const runJapan = async () => {
//     const data = JSON.stringify(await getGamesJapan());
//     console.log(data);
// };
//
// runJapan();

// const runEurope = async () => {
//     const data = JSON.stringify(await getGamesEurope({locale: 'en', limit: 5}));
//     console.log(data);
// };
//
// runEurope();

const run = async () => {
    const data = await getShopsByCountryCodes(['US', 'EU'], '70010000000025', 5);
    console.log(data);
};

run();