import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { parse as xml2json } from 'fast-xml-parser';
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
    const gamesJP = xml2json(await fetch(JP_GET_GAMES_URL, FetchResultTypes.Text));

    const allGamesJP: GameJP[] = gamesJP.TitleInfoList.TitleInfo;

    return allGamesJP;
  } catch (err) {
    if (/(?:JP_games_request_failed)/i.test((err as Error).message)) {
      throw new EshopError('Fetching of JP Games failed');
    }
    throw err;
  }
};
