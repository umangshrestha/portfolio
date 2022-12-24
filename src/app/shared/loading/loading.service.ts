import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);

  public readonly loading$ = this._loading.asObservable().pipe(delay(1));

  constructor() { }


  setLoading(loading: boolean) {
    this._loading.next(loading);
  }

  getLoading() {
    return this._loading.getValue();
  }

}
