import { JP_NSUID_REGEX, Region } from '../utils/constants';
import type { GameEU, GameJP, GameUS } from '../utils/interfaces';

/**
 * Extracts NSUID information from the game object.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 14-digits NSUID
 */
export const parseNSUID = (game: GameUS | GameEU | GameJP, region: Region): string | null => {
  switch (region) {
    case Region.EUROPE:
      return (game as GameEU).nsuid_txt ? (game as GameEU).nsuid_txt[0] : null;
    case Region.ASIA:
      const nsuidParse = JP_NSUID_REGEX.exec((game as GameJP).LinkURL);

      return nsuidParse && nsuidParse.length > 0 ? nsuidParse[0] : null;
    default:
    case Region.AMERICAS:
      return (game as GameUS).nsuid;
  }
};
