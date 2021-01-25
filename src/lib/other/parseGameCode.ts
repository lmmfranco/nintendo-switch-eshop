import { deprecate } from 'util';
import { EU_GAME_CODE_REGEX, JP_GAME_CODE_REGEX, Region, US_GAME_CODE_REGEX } from '../utils/constants';
import type { GameEU, GameJP, GameUS } from '../utils/interfaces';

/**
 * Parses the game code to extract the cross-region portion.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 4-digit resulting game code
 */
export const parseGameCode = (game: GameUS | GameEU | GameJP, region: Region): string | null => {
  let codeParse: RegExpExecArray | null;

  switch (region) {
    default:
    case Region.EUROPE:
      codeParse = EU_GAME_CODE_REGEX.exec((game as GameEU).product_code_txt[0]);
      break;
    case Region.ASIA:
      codeParse = JP_GAME_CODE_REGEX.exec((game as GameJP).InitialCode);
      break;
    case Region.AMERICAS:
      return deprecate(
        () => (US_GAME_CODE_REGEX.exec((game as GameUS).game_code!)?.length || false ? US_GAME_CODE_REGEX.exec((game as GameUS).game_code!)![1] : ''),
        'game_code is no longer returned by the API for American games so it can no longer be parsed from the data.',
        'DEP0001'
      )();
  }

  return codeParse && codeParse.length > 1 ? codeParse[1] : null;
};
