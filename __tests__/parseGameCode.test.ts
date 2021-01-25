import { parseGameCode, Region } from '../src';
import { AMERICAN_GAME, AMERICAN_GAME_WITH_GAME_CODE, EUROPEAN_GAME, JAPANESE_GAME } from './testUtils';

describe('Success: parseGameCode', () => {
  test('Region == AMERICAS', () => {
    const data = parseGameCode(AMERICAN_GAME, Region.AMERICAS);
    expect(data).toBe('');
  });

  test('GIVEN American game with game_code AND Region == AMERICAS', () => {
    const data = parseGameCode(AMERICAN_GAME_WITH_GAME_CODE, Region.AMERICAS);
    expect(data).toBe('AACC');
  });

  test('Region == ASIA', () => {
    const data = parseGameCode(JAPANESE_GAME, Region.ASIA);
    expect(typeof data).toBe('string');
    expect(data).toBe('ATBC');
  });

  test('Region == Europe', () => {
    const data = parseGameCode(EUROPEAN_GAME, Region.EUROPE);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(4);
    expect(data).toBe('2345');
  });
});
