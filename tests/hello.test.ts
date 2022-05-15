import { HELLO_WORLD } from 'src/index'

describe('hello', async () => {
  test.concurrent('hello', async () => {
    expect(HELLO_WORLD).toBe('Hello World!')
  })
})
