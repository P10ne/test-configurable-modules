import { Injectable } from '@angular/core';
import {ConnectAbstractObsService} from "../../connect/services/connect-abstract-obs.service";
import {AuthService} from "./auth.service";

@Injectable()
export class ConnectAuthService extends ConnectAbstractObsService {

  constructor(
    private authService: AuthService
  ) {
    super();
    this.start$ = this.authService.user$;
  }
}
