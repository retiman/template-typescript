import { hello } from '../../src/hello';
import { logger } from '../shared/logger';

describe('hello', () => {
  test('hello', async () => {
    logger.info('We are testing hello in a unit test');

    expect(hello()).toBe('Hello World!');
  });
});
