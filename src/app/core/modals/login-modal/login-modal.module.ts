import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AuthService } from '../../auth/auth.service';
import { LoginModalComponent } from './login-modal.component';

@NgModule({
  declarations: [LoginModalComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxSmartModalModule.forRoot()],
  providers: [AuthService],
  exports: [LoginModalComponent]
})
export class LoginModalModule {}
