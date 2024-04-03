import { DependencyContainer } from 'tsyringe';
import { Token } from './token';
import { RealFoo } from '../foo';

export function registerCommon(container: DependencyContainer) {
  container.registerSingleton(Token.Foo, RealFoo);
}
