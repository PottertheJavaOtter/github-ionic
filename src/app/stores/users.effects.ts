import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map, pluck,
  startWith,
  switchMap
} from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {
  load,
  loadAll,
  loadAllSuccess,
  loadSuccess,
  search,
  searchSuccess
} from './users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) { }

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(loadAll),
    startWith(loadAll()),
    switchMap(() => this.usersService.getUsers().pipe(
      map(users => loadAllSuccess({ users }))
    )),
  ));

  search$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    pluck('query'),
    switchMap(query => this.usersService.search(query).pipe(
      map(user => searchSuccess({ user }))
    )),
  ));

}
