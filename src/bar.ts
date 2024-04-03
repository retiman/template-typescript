export interface Bar {
  getBar(): number;
}

export class RealBar implements Bar {
  public getBar() {
    return 20;
  }
}
