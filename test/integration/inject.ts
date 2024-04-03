import { container as tsyringe } from 'tsyringe';
import { registerCommon } from '../../src/inject/registry';
import { Token } from '../../src/inject/token';
import { RealBar } from '../../src/bar';

export function createContainer() {
  const container = tsyringe.createChildContainer();
  registerCommon(container);

  container.registerSingleton(Token.Bar, RealBar);
}
