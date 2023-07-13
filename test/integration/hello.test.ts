import { HELLO_WORLD } from '../../src';
import { HELLO_WORLD_TEST } from '../shared/hello';
import { logger } from '../shared/logger';

describe('hello integration', () => {
  test.concurrent('hello', async () => {
    logger.info('We are testing hello in an integration test');

    expect(HELLO_WORLD).toBe(HELLO_WORLD_TEST);
  });
});
