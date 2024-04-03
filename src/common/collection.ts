/* eslint-disable-next-line max-classes-per-file */
import * as util from 'util';
import { GenericConstructor } from './types';

export function FixedMap<K, V>(BaseClass: GenericConstructor<Map<K, V>>) {
  return class SubClass extends BaseClass {
    public set(key: K, value: V): this {
      if (super.has(key)) {
        throw new Error(`Cannot set the same key twice: ${util.inspect(key)}`);
      }

      super.set(key, value);
      return this;
    }

    public delete(key: K): boolean {
      if (super.has(key)) {
        throw new Error(`Cannot remove a key: ${util.inspect(key)}`);
      }

      return false;
    }

    public clear(): void {
      throw new Error(`Cannot clear collection`);
    }
  };
}

export function FixedSet<E>(BaseClass: GenericConstructor<Set<E>>) {
  return class SubClass extends BaseClass {
    public delete(e: E): boolean {
      throw new Error(`Cannot delete an element: ${util.inspect(e)}`);
    }

    public clear(): void {
      throw new Error('Cannot clear collection');
    }
  };
}
/* eslint-enable-next-line max-classes-per-file */
