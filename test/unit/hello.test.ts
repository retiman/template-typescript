import { foo } from '../../src';
import { bar } from '../shared/hello';
import { logger } from '../shared/logger';

describe('hello unit', () => {
  test.concurrent('hello', async () => {
    logger.info('We are testing hello in a unit test');

    expect(foo()).toBe(bar());
  });
});
