import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import { JP_GET_GAMES_URL } from '../utils/constants';
import type { GameJP } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Fetches all games on japanese eShops
 *
 * @returns Promise containing all the games
 */
export const getGamesJapan = async (): Promise<GameJP[]> => {
  try {
    const gamesJP = await fetch(JP_GET_GAMES_URL);

    if (!gamesJP.ok) throw new Error('JP_games_request_failed');

    const parsedGamesJP = xml2json(await gamesJP.text());

    const allGamesJP: GameJP[] = parsedGamesJP.TitleInfoList.TitleInfo;

    return allGamesJP;
  } catch (err) {
    if (/(?:JP_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of JP Games failed');
    throw err;
  }
};
