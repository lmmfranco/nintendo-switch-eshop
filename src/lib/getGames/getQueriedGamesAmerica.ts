import fetch from 'node-fetch';
import { stringify } from 'querystring';
import { QUERIED_US_ALGOLIA_KEY, US_ALGOLIA_HEADERS, QUERIED_US_GET_GAMES_URL } from '../utils/constants';
import type { QueriedGameResult, QueriedGamesAmericaOptions, QueriedGameUS } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Fetches a subset of games from the American e-shops as based on a given query
 * @param query The query to search for
 * @returns Promise containing the first 200 games that match your query
 * @license Apache-2.0 Favna & Antonio Román
 * @copyright 2019
 */
export const getQueriedGamesAmerica = async (
  query: string,
  { hitsPerPage = 200, page = 0 }: QueriedGamesAmericaOptions = { hitsPerPage: 200, page: 0 }
): Promise<QueriedGameUS[]> => {
  const response = await fetch(QUERIED_US_GET_GAMES_URL, {
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
  });

  if (!response.ok) throw new EshopError(`Fetching games for the query "${query} failed"`);

  const { hits }: QueriedGameResult = await response.json();

  if (!hits.length) throw new EshopError(`No game results for the query "${query}"`);

  return hits;
};
