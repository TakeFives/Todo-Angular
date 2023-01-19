import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Board } from 'src/app/model/board';
import { environment } from '../../../environments/environment';
import { boardsReducer } from './main.reducer';

export interface State {
  boards: Board[]
}

export const reducers: ActionReducerMap<State> = {
  boards: boardsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
