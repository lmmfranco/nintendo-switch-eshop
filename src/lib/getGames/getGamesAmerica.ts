import fetch from 'node-fetch';
import { stringify } from 'querystring';
import {
  US_ALGOLIA_HEADERS,
  US_AVAILABILITY_FILTER,
  US_ESRB_RATINGS_FILTERS,
  US_FACETS,
  US_GAME_LIST_LIMIT,
  US_GET_GAMES_URL,
  US_INDEX_TITLE_ASC,
  US_INDEX_TITLE_DES,
  US_PLATFORM_FACET_FILTER
} from '../utils/constants';
import type { AlgoliaResponse, GameUS } from '../utils/interfaces';
import { arrayRemoveDuplicates, EshopError } from '../utils/utils';

/**
 * Fetches all games on american e-shops
 *
 * @remarks
 * Currently ONLY returns all games in the e-shop
 *
 * @returns Promise containing all the games
 */
export const getGamesAmerica = async (): Promise<GameUS[]> => {
  const limit = US_GAME_LIST_LIMIT;
  const page = 0;

  const body = {
    body: JSON.stringify({
      requests: [
        {
          indexName: US_INDEX_TITLE_ASC,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.everyone}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_DES,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.everyone}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_ASC,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.everyone10}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_DES,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.everyone10}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_ASC,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.teen}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_DES,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.teen}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_ASC,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_ESRB_RATINGS_FILTERS.mature}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        },
        {
          indexName: US_INDEX_TITLE_ASC,
          params: stringify({
            query: '',
            hitsPerPage: limit,
            page,
            analytics: false,
            facets: US_FACETS,
            facetFilters: `[["${US_AVAILABILITY_FILTER}"],["${US_PLATFORM_FACET_FILTER}"]]`
          })
        }
      ]
    }),
    method: 'POST',
    headers: US_ALGOLIA_HEADERS
  };

  try {
    const allGamesResponse = await fetch(US_GET_GAMES_URL, body);
    if (!allGamesResponse.ok) throw new Error('US_games_request_failed');
    const gamesResponse: AlgoliaResponse<GameUS> = await allGamesResponse.json();

    let allGames: any[] | PromiseLike<GameUS[]> = [];
    for (const results of gamesResponse.results) {
      allGames = allGames.concat(results.hits);
    }

    allGames = arrayRemoveDuplicates(allGames, 'slug');
    return allGames;
  } catch (err) {
    if (/(?:US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of US Games failed');
    throw err;
  }
};
