import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { observable } from 'rxjs';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading$: Subject<boolean> = new Subject();

  constructor() { }

  startLoading() {
    this.loading$.next(true);
  }
  stopLoading() {
    this.loading$.next(false);
  }

}

