import { Injectable } from '@angular/core';
import { combineEpics, ActionsObservable, createEpicMiddleware } from 'redux-observable';

import 'rxjs/add/observable/of';

@Injectable()
export class RootEpics {
  public createEpics() {
    return [
        createEpicMiddleware(action$ => {
            return action$.ofType('INC').throttleTime(1000).mapTo({type: 'ADD', payload: +1});
        }),
        createEpicMiddleware(action$ => {
            return action$.ofType('DEC').throttleTime(2000).mapTo({type: 'ADD', payload: -1});
        })
    ];
  }
}
