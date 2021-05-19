import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

export abstract class ConnectAbstractObsService {
  public start$!: Observable<number>;

  protected constructor() {}
}
