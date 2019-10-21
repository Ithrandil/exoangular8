import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private toastr: ToastrService, private logger: NGXLogger) {}
  handleError(er: any): void {
    this.logger.error(er);
    if (er.status && er.status === 500) {
      this.toastr.error('Try again later', 'Something went wrong');
    } else if (er instanceof HttpErrorResponse && er.error.message) {
      this.toastr.error(`Status ${er.error.code}. ${er.error.message}`, 'Http Error');
    } else {
      this.toastr.error(er.message, er.name);
    }
    throw er;
  }
}
