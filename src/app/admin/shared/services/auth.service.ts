import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/interfaces';

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string | null {
    const currentDate: any = localStorage.getItem('fb-token-exp');
    const expDate = new Date(currentDate);
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  private setToken(response: any): void {
    console.log('Response', response);
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(url, user).pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))
    );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError( error: HttpErrorResponse): any {
    const {message} = error.error.error;

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email is wrong');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Password is wrong');
        break;
      case 'USER_DISABLED':
        this.error$.next('User dont exist');
        break;
    }

    return throwError(error);
  }
}
