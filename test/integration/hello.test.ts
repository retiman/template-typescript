import { hello } from '../../src/hello';
import { logger } from '../shared/logger';

describe('hello integration', () => {
  test('hello', async () => {
    logger.info('We are testing hello in an integration test');

    expect(hello()).toBe('Hello World!');
  });
});
