import { Component, OnInit } from '@angular/core';
import { UsersStoreFacade } from '../stores/users.store-facade';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  search$: Observable<User>;
  query: string;

  constructor(
    private usersFacade: UsersStoreFacade,
    private route: ActivatedRoute
  ) {
    this.search$ = this.usersFacade.search$;
  }

  ngOnInit() {
    this.route
      .queryParamMap
      .pipe(map(params => params.get('login') || ''))
      .subscribe(login => {
        this.query = login;
        this.usersFacade.searchUsers(login);
      });
  }

  ngOnDestroy() {
    this.usersFacade.clearSearch();
  }

  search(e) {
    this.query = e.target.value;
    this.usersFacade.searchUsers(e.target.value);
  }

}
