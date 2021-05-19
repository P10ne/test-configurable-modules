import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ConnectModule} from "./connect/connect.module";
import {AuthModule} from "./auth/auth.module";
import {ConnectAuthService} from "./auth/services/connect-auth.service";
import {ConnectAbstractObsService} from "./connect/services/connect-abstract-obs.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ConnectModule.forRoot({
      provide: ConnectAbstractObsService,
      useClass: ConnectAuthService
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
