import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { stringify } from 'querystring';
import { QUERIED_US_ALGOLIA_KEY, QUERIED_US_GET_GAMES_URL, US_ALGOLIA_HEADERS } from '../utils/constants';
import type { QueriedGameResult, QueriedGamesAmericaOptions, QueriedGameUS } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Fetches a subset of games from the American e-shops as based on a given query
 * @param query The query to search for
 * @param __namedParameters Additional options for the [[getQueriedGamesAmerica]] call. Defaults to `{ hitsPerPage: 200, page: 0 }`
 * @returns Promise containing the first `hitsPerPage` games that match your query
 * @license Apache-2.0 Favna & Antonio Román
 * @copyright 2019
 */
export const getQueriedGamesAmerica = async (
  query: string,
  { hitsPerPage = 200, page = 0 }: QueriedGamesAmericaOptions = { hitsPerPage: 200, page: 0 }
): Promise<QueriedGameUS[]> => {
  const { hits } = await fetch<QueriedGameResult>(
    QUERIED_US_GET_GAMES_URL,
    {
      method: 'POST',
      headers: {
        ...US_ALGOLIA_HEADERS,
        'X-Algolia-API-Key': QUERIED_US_ALGOLIA_KEY
      },
      body: JSON.stringify({
        params: stringify({
          hitsPerPage,
          page,
          query
        })
      })
    },
    FetchResultTypes.JSON
  );

  if (!hits.length) throw new EshopError(`No game results for the query "${query}"`);

  return hits;
};
