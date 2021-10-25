import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { stringify } from 'querystring';
import { US_ALGOLIA_HEADERS, US_GET_GAMES_URL } from '../utils/constants';
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
  const page = 0;

  const baseParameters: Omit<ParamsObject, 'facetFilters'> = {
    hitsPerPage: US_GAME_LIST_LIMIT,
    page,
    analytics: false,
    facets: US_FACETS
  };

  const requests: Request[] = [];

  for (const rating of US_ESRB_RATINGS_FILTERS) {
    requests.push(
      {
        indexName: US_INDEX_TITLE_ASC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      },
      {
        indexName: US_INDEX_TITLE_DESC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      }
    );
  }

  for (const rating of US_AVAILABILITY_FILTER) {
    requests.push(
      {
        indexName: US_INDEX_TITLE_ASC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      },
      {
        indexName: US_INDEX_TITLE_DESC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      }
    );
  }

  for (const rating of US_COMMON_GAME_FRANCHISES) {
    requests.push(
      {
        indexName: US_INDEX_TITLE_ASC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      },
      {
        indexName: US_INDEX_TITLE_DESC,
        params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` })
      }
    );
  }

  const requestOptions = {
    body: JSON.stringify({
      requests
    }),
    method: 'POST',
    headers: US_ALGOLIA_HEADERS
  };

  try {
    const gamesResponse = await fetch<AlgoliaResponse>(US_GET_GAMES_URL, requestOptions, FetchResultTypes.JSON);

    let allGames: any[] | PromiseLike<GameUS[]> = [];
    for (const results of gamesResponse.results) {
      allGames = allGames.concat(results.hits);
    }

    allGames = arrayRemoveDuplicates(allGames, 'slug');
    return allGames;
  } catch (err) {
    if (/(?:US_games_request_failed)/i.test((err as Error).message)) {
      throw new EshopError('Fetching of US Games failed');
    }
    throw err;
  }
};

interface Request {
  indexName: string;
  params: string;
}

interface ParamsObject {
  hitsPerPage: number;
  page: number;
  analytics: boolean;
  facets: string;
  facetFilters: string;
}

/** @internal The maximum number of entries that Nintendo lets us get in 1 request for US games */
const US_GAME_LIST_LIMIT = 1000;

/** @internal Index names for querying all games by ascending title */
const US_INDEX_TITLE_ASC = 'ncom_game_en_us_title_asc';

/** @internal Index names for querying all games by descending title */
const US_INDEX_TITLE_DESC = 'ncom_game_en_us_title_des';

/** @internal Static query parameters for facets/filters in US Algolia calls */
const US_FACETS = JSON.stringify([
  'generalFilters',
  'platform',
  'availability',
  'genres',
  'howToShop',
  'virtualConsole',
  'franchises',
  'priceRange',
  'esrbRating',
  'playerFilters'
]);

/** @internal */
const US_PLATFORM_FACET_FILTER = 'platform:Nintendo Switch';

/** @internal ESRB options for querying all games in one request */
const US_ESRB_RATINGS_FILTERS = ['esrbRating:Everyone', 'esrbRating:Everyone 10+', 'esrbRating:Teen', 'esrbRating:Mature'];

/** @internal Availability filters for querying all games in one request */
const US_AVAILABILITY_FILTER = ['availability:Pre-order', 'availability:Coming soon', 'availability:Available now'];

/** @internal Common franchises for querying all games in one request */
const US_COMMON_GAME_FRANCHISES = ['franchises:Mario', 'franchises:Zelda', 'franchises:Pokémon', 'franchises:Kirby'];
