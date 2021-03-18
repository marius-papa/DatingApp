import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new Subject<boolean>();
  isLoading$ = this.isLoading.asObservable();

  constructor() { }


  next(val: boolean) {
    this.isLoading.next(val)
  }
}
