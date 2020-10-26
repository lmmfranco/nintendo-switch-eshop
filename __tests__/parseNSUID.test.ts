import { parseNSUID, Region } from '../src';
import { AMERICAN_GAME, EUROPEAN_GAME, JAPANESE_GAME, JAPANESE_GAME_FAIL } from './testUtils';

describe('parse NSUID', () => {
  test('Region == US', async () => {
    const data = parseNSUID(AMERICAN_GAME, Region.AMERICAS);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(14);
    expect(data).toBe('70010000000141');
  });

  test('Success: Region == ASIA', () => {
    const data = parseNSUID(JAPANESE_GAME, Region.ASIA);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(14);
    expect(data).toBe('12345678912345');
  });

  test('Fail: Region == ASIA', () => {
    const data = parseNSUID(JAPANESE_GAME_FAIL, Region.ASIA);
    expect(data).toBeNull();
  });

  test('Region == Europe', () => {
    const data = parseNSUID(EUROPEAN_GAME, Region.EUROPE);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(14);
    expect(data).toBe('12345678912345');
  });
});
