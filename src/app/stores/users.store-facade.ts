import { Injectable } from '@angular/core';
import * as fromUsers from './users.reducer';
import { select, Store } from '@ngrx/store';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { loadAll, search, clearSearch } from './users.actions';
import { selectAllUsers, selectSearch } from './users.selectors';

@Injectable()
export class UsersStoreFacade {

  users$: Observable<User[]>;
  search$: Observable<User>;

  constructor(private store: Store<fromUsers.State>) {
    this.users$ = this.store.pipe(
      select(selectAllUsers)
    );
    this.search$ = this.store.pipe(
      select(selectSearch)
    );
  }

  clearSearch() {
    this.store.dispatch(clearSearch());
  }

  getUsers() {
    this.store.dispatch(loadAll());
  }

  searchUsers(query: string) {
    this.store.dispatch(search({ query }));
  }

}
