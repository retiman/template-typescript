import { HELLO_WORLD } from 'src/index';

describe('hello', () => {
  test.concurrent('hello', async () => {
    expect(HELLO_WORLD).toBe('Hello World!');
  });
});
