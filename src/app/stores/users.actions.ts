import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';


export const loadAll = createAction(
  '[User] Load all'
);

export const load = createAction(
  '[User] Load',
  props<{ id: string }>()
);

export const loadAllSuccess = createAction(
  '[User] Load all success',
  props<{ users: User[] }>()
);

export const loadSuccess = createAction(
  '[Contacts] Load success',
  props<{ 'user': User }>()
);

export const search = createAction('[Users] Search', props<{ 'query': string }>());
export const searchSuccess = createAction('[Users] Search Success', props<{ user: User }>());
export const searchFailure = createAction('[Users] Search Failure', props<{ user: User }>());

export const clearSearch = createAction('[Users] Clear Search');

export const failure = createAction(
  '[User] Failure',
  props<{ err: { concern: 'CREATE' | 'PATCH', error: any } }>()
);
