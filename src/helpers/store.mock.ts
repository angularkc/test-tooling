import { Action, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

export class MockStore<T> {
  actions?: Subject<Action>;
  states?: Subject<T>;
}

export function mockStore<T>({actions = new Subject<Action>(), states = new Subject<T>()}: MockStore<T>): Store<T> {
  const result = states as any;
  result.select = cb => result.map(cb);
  result.dispatch = (action: Action) => actions.next(action);
  return result;
}

export const getMockStore = () => mockStore<any>({});
