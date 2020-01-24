import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';

import { Logout } from '../../stores/user.store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Select('UserState.isLoggedIn') isLoggedIn$: Observable<boolean>;
  @Select('UserState.connectedUser') connectedUser$: Observable<User>;

  constructor(public modalService: NgxSmartModalService, private store: Store) {}

  ngOnInit() {}

  logOut() {
    this.store.dispatch(new Logout());
  }
}
