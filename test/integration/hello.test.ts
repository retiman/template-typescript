import { foo } from '../../src';
import { bar } from '../shared/hello';
import { logger } from '../shared/logger';

describe('hello integration', () => {
  test.concurrent('hello', async () => {
    logger.info('We are testing hello in an integration test');

    expect(foo()).toBe(bar());
  });
});
