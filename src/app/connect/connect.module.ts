import {APP_BOOTSTRAP_LISTENER, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConnectApiService} from "./services/connect-api.service";
import {ConnectAbstractObsService} from "./services/connect-abstract-obs.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConnectApiService
  ]
})

export class ConnectModule {
  public static forRoot(implementationProvider: Provider): ModuleWithProviders<any> {
    return {
      ngModule: ConnectModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory: (s: ConnectApiService) => () => { s.init(); },
          deps: [ConnectApiService],
          multi: true
        },
        implementationProvider
      ]
    }
  }
}
