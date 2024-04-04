import { MirrorConstraint } from '../common/types';

export enum Token {
  Foo = 'Foo',
  Bar = 'Bar'
}

type _ = MirrorConstraint<typeof Token>;
