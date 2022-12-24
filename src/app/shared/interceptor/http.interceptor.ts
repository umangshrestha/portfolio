import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class HttpNetworkInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  private completedRequests = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoading(true);
    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.completedRequests++;
        if (this.completedRequests === this.totalRequests) {
          this.loadingService.setLoading(false);
          this.totalRequests = 0;
          this.completedRequests = 0;
        }
      })
    )
  }
}
