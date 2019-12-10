import { parseGameCode, Region } from '../src';
import { AMERICAN_GAME, EUROPEAN_GAME, JAPANESE_GAME } from './testUtils';

describe('Success: parseGameCode', () => {
  test('Region == AMERICAS', async () => {
    const data = parseGameCode(AMERICAN_GAME, Region.AMERICAS);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(4);
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