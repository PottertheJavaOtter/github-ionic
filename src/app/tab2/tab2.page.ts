import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

import { UsersStoreFacade } from '../stores/users.store-facade';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  users$: Observable<User[]>;

  constructor(
    private usersFacade: UsersStoreFacade
  ) {
    this.users$ = this.usersFacade.users$;
  }

  loadUsers(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.usersFacade.getUsers();
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
