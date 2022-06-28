import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  users: any;
  token: any;
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(
      'https://json-server.ede.local/testProjectCustomers',
      user
    );
  }
  checkUsernameEmail(): Observable<any> {
    return this.http.get<any>(
      'https://json-server.ede.local/testProjectCustomers'
    );
  }

  logInUser(): Observable<any> {
    return this.http.get<any>(
      'https://json-server.ede.local/testProjectCustomers'
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
