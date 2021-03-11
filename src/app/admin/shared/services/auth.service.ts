import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[${environment.apiKey}]`;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any>{
    return this.http.post(url, user);
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(): void {

  }
}
