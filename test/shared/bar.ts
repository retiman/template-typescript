import { Bar } from '../../src/bar';

export class FakeBar implements Bar {
  public getBar() {
    return 30;
  }
}
