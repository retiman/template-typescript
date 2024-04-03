export interface Foo {
  getFoo(): number;
}

export class RealFoo implements Foo {
  public getFoo() {
    return 10;
  }
}
