import { HELLO_WORLD } from '../../src';
import { HELLO_WORLD_TEST } from '../shared/hello';

describe('hello unit', () => {
  test.concurrent('hello', async () => {
    expect(HELLO_WORLD).toBe(HELLO_WORLD_TEST);
  });
});
