import { Injectable } from '@angular/core';
import {Observable, timer} from "rxjs";

@Injectable()
export class AuthService {
  public user$: Observable<number>;

  constructor() {
    this.user$ = timer(3000);
  }
}
