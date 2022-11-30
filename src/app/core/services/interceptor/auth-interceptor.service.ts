import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { ConfigStorage } from '../../storage';
// import { StorageMasterService } from '../../storage/storage-master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  expires: number;

    constructor(
        // private configStorage: ConfigStorage,
        // private storageMasterService: StorageMasterService
    ) { }


    /**
     * @description Method intercept
     * @param request the request
     * @param next
     */
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = undefined; // (this.configStorage.get() !== undefined) ? this.configStorage.get().isAuth : undefined;
      if (token !== undefined && token !== null && token !== false) {
          const headers = request.headers.set('Authorization', 'Bearer ' + '').set('Accept', 'application/json');
          request = request.clone({ headers });
          return next.handle(request).pipe(
              map((event: HttpEvent<any>) => event),
              catchError((error: HttpErrorResponse) => {
                  this.error(error);
                  return throwError(error);
              })
          );
      } else {
          return next.handle(request).pipe(
              map((event: HttpEvent<any>) => event),
              catchError((error: HttpErrorResponse) => {
                  this.error(error);
                  return throwError(error);
              })
          );
      }
  }

  error(error) {
      if (error.status === 401) {
          // this.storageMasterService.clearSession();
      } else if (error.status === 403) {
          // this.globals.disabledUser();
      } else if (error.status === 503) {
          // this.globals.dismissModal();
      }
  }
}
