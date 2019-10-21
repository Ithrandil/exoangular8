import { NgxLoggerLevel } from 'ngx-logger';
import { ProgressAnimationType } from 'ngx-toastr';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,

  SERVER_URL: 'http://localhost:3000',

  /**
   * Toastr config
   */
  TOASTR_TIMEOUT: 5000,
  TOASTR_POSITION_CLASS: 'toast-top-center',
  TOASTR_PREVENT_DUPLICATES: true,
  TOASTR_PROGRESS_BAR: true,
  TOASTR_PROGRESS_ANIMATION: 'increasing' as ProgressAnimationType,

  /**
   * Logger config
   */
  LOGGER_LEVEL: NgxLoggerLevel.DEBUG as NgxLoggerLevel,
  LOGGER_DISABLE_CONSOLE_LOGGING: false,
  LOGGER_SERVER_LOGGING_URL: 'http://localhost:3000/logs',
  LOGGER_SERVER_LOG_LEVEL: NgxLoggerLevel.OFF as NgxLoggerLevel,
  LOGGER_HTTP_RESPONSE_TYPE: 'text' as 'arraybuffer' | 'blob' | 'text' | 'json'
  // TESTER LES DIFF POSSIBILITE COUPLEE A LA GESTION DANS LE BACK
};
