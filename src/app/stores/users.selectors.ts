import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from './users.reducer';


export const selectUsersState = createFeatureSelector<fromUsers.State>('users');



export const selectAllUsers = createSelector(
  selectUsersState,
  fromUsers.selectAll
);

export const selectSearch = createSelector(
  selectUsersState,
  (state: fromUsers.State) => state.search
);
