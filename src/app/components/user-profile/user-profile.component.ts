import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  @Input() user: User;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() { }

  openWebsite() {
    if (this.user.blog) {
      const browser = this.iab.create(this.user.blog);
      browser.close();
    }
  }
}
