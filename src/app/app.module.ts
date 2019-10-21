import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { LoggerModule } from 'ngx-logger';
import { ToastrModule } from 'ngx-toastr';

import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CustomErrorHandler } from './core/error-management/custom-error-handler';
import { ParksModule } from './parks/parks.module';
import { TermsState } from './store/state/moovhub.state';
import { TermsModule } from './terms/terms.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TermsModule,
    ParksModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: env.TOASTR_TIMEOUT,
      positionClass: env.TOASTR_POSITION_CLASS,
      preventDuplicates: env.TOASTR_PREVENT_DUPLICATES,
      progressBar: env.TOASTR_PROGRESS_BAR,
      progressAnimation: env.TOASTR_PROGRESS_ANIMATION
    }),
    LoggerModule.forRoot({
      level: env.LOGGER_LEVEL,
      disableConsoleLogging: env.LOGGER_DISABLE_CONSOLE_LOGGING,
      serverLoggingUrl: env.LOGGER_SERVER_LOGGING_URL,
      serverLogLevel: env.LOGGER_SERVER_LOG_LEVEL,
      httpResponseType: env.LOGGER_HTTP_RESPONSE_TYPE
      // TESTER LES DIFF POSSIBILITE COUPLEE A LA GESTION DANS LE BACK
    }),
    NgxsModule.forRoot([TermsState], { developmentMode: !env.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: env.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: env.production })
  ],
  providers: [{ provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
