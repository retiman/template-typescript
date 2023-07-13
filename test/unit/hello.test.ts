import { HELLO_WORLD } from '../../src';
import { HELLO_WORLD_TEST } from '../shared/hello';
import { logger } from '../shared/logger';

describe('hello unit', () => {
  test.concurrent('hello', async () => {
    logger.info('We are testing hello in a unit test');

    expect(HELLO_WORLD).toBe(HELLO_WORLD_TEST);
  });
});
