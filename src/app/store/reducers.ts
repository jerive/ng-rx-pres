import { combineReducers, Reducer } from 'redux';
import { IAppState } from './model';
import { FSA } from 'flux-standard-action';

export const rootReducer = combineReducers<IAppState>({
    total: (s = 0, action: FSA<number, void>) => {
        switch(action.type) {
            case 'ADD' :
                return s + action.payload;
            default:
                return s;
        }
    }
});
