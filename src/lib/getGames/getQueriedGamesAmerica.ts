import fetch from 'node-fetch';
import { stringify } from 'querystring';
import { US_ALGOLIA_HEADERS, US_GET_GAMES_URL } from '../utils/constants';
import type { AlgoliaResponse, QueriedGameUS } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

const QUERY_NINTENDO_KEY = '9a20c93440cf63cf1a7008d75f7438bf';

/**
 * Fetches a subset of games from the American e-shops as based on a given query
 * @param query The query to search for
 * @returns Promise containing the first 200 games that match your query
 * @license Apache-2.0 Favna & Antonio Román
 * @copyright 2019
 */
export const getQueriedGamesAmerica = async (query: string): Promise<QueriedGameUS[]> => {
  const response = await fetch(US_GET_GAMES_URL, {
    method: 'POST',
    headers: {
      ...US_ALGOLIA_HEADERS,
      'X-Algolia-API-Key': QUERY_NINTENDO_KEY
    },
    body: JSON.stringify({
      requests: [
        {
          indexName: 'noa_aem_game_en_us',
          params: stringify({
            facetFilters: ['type:game'],
            hitsPerPage: 200,
            page: 0,
            query
          })
        }
      ]
    })
  });

  if (!response.ok) throw new EshopError(`Fetching games for the query "${query} failed"`);

  const { results }: AlgoliaResponse<QueriedGameUS> = await response.json();

  if (!results.length) throw new EshopError(`No game results for the query "${query}"`);

  return results[0].hits;
};
