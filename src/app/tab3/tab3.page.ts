import { Component } from '@angular/core';
import { UsersStoreFacade } from '../stores/users.store-facade';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  search$: Observable<User>;

  constructor(
    private usersFacade: UsersStoreFacade
  ) {
    this.search$ = this.usersFacade.search$;
  }

  search(e) {
    this.usersFacade.searchUsers(e.target.value);
  }

}
