import { container as tsyringe } from 'tsyringe';
import { registerCommon } from '../../src/inject/registry';
import { Token } from '../../src/inject/token';
import { FakeBar } from '../shared/bar';

export function createContainer() {
  const container = tsyringe.createChildContainer();
  registerCommon(container);

  container.registerSingleton(Token.Bar, FakeBar);
}
