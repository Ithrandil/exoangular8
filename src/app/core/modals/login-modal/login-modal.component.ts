import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { Login } from '../../stores/user.store';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private modalService: NgxSmartModalService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    const user = this.form.value;
    if (user.email && user.password) {
      this.store.dispatch(new Login(user)).subscribe(() => {
        this.modalService.close('loginModal');
      });
    }
  }
}
