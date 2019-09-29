import { User } from '../models/user.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  loadAllSuccess,
  loadSuccess,
  searchSuccess,
  clearSearch
} from './users.actions';

// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const usersAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.login,
  sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Contact> {
//   ids: string[] | number[];
//   entities: { [id: string]: Contact };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects


export interface State extends EntityState<User> {
  // additional props here
  search: User;
}

export const INIT_STATE: State = usersAdapter.getInitialState({
  // additional props default values here
  search: null
});

export const usersReducer = createReducer<State>(
  INIT_STATE,
  on(loadAllSuccess, (state, { users }) =>
    usersAdapter.addMany(users, state)
  ),
  on(loadSuccess, (state, { user }) =>
    usersAdapter.upsertOne(user, state)
  ),
  on(searchSuccess, (state, { user }) => ({
    ...state,
    search: user
  })),
  on(clearSearch, (state) => ({
    ...state,
    search: null
  }))
);

export const getUsersById = (id: string) => (state: State) => state.entities[id];

export const { selectAll } = usersAdapter.getSelectors();
