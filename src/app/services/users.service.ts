import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://api.github.com/';
  since = 0;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users?since=${this.since}`, {
      observe: 'response'
    }).pipe(map(res => {
      const users = res.body;
      this.since += users.length;
      return users;
    }));
  }

  search(query: string): Observable<User> {
    return this.http.get<User>(`${this.url}users/${query}`);
  }
}
