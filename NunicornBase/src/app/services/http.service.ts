import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry, tap } from 'rxjs/operators';
import { AppSettings } from '../app.settings';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  doGet<T>(url: string, withCreds: boolean = false) {
    return this.httpClient.get(url, { withCredentials: withCreds}).pipe(
      retry(AppSettings.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  doPost<T>(url: string, data: any, withCreds: boolean = false, authToken?: string) {
    const httpOptions = this.getHttpOptions(url, withCreds, authToken);
    return this.httpClient.post(url, data, httpOptions).pipe(
      retry(AppSettings.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  doPut<T>(url: string, data: any, withCreds: boolean = false) {
    return this.httpClient.put(url, data, { withCredentials: withCreds}).pipe(
      retry(AppSettings.HTTP_RETRIES),
      catchError(this.handleError)
    );
  }

  /**
   * Handle the error and determine if network/backend
   * Returns user friendly response
   * @param {HttpErrorResponse} error
   * @returns {ErrorObservable}
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.warn('An network error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.warn('A backend error occured:', error.message);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      error.error);
  }

  private getHttpOptions(url: string, withCreds: boolean, authToken?: string) {
    const newHeaders: {} = {};
    if (this.isAuthenticatedApi(url) && authToken) {
      newHeaders[AppSettings.XSRF_HEADER_NAME] = authToken;
      newHeaders['Content-Type'] = 'application/json';
    } else {
      newHeaders['Content-Type'] = 'application/json';
    }

    const httpOptions = {
      withCredentials: withCreds,
      headers: new HttpHeaders(newHeaders)
    };

    return httpOptions;
  }

  private isAuthenticatedApi(url: string) {
    return true;
  }

}
