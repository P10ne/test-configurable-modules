import {Injectable, OnDestroy} from '@angular/core';
import {ConnectAbstractObsService} from "./connect-abstract-obs.service";
import {Subscription} from "rxjs";

@Injectable()
export class ConnectApiService implements OnDestroy {
  private startSub: Subscription | undefined;
  constructor(
    private connectObs: ConnectAbstractObsService
  ) {}

  public init(): void {
    if (!this.connectObs?.start$) {
      new Error('Start$ is not defined');
    }
    this.startSub = this.connectObs.start$.subscribe(event => {
      console.log('subscribe event: ', event);
    })
  }

  ngOnDestroy(): void {
    this.startSub?.unsubscribe();
  }
}
