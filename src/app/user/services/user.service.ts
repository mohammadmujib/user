import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  constructor(private http: HttpClient) {}
  read() {
    if (this.users.length) {
      return of(this.users);
    }
    return this.http.get<User[]>(`/api/users`).pipe(
      tap((users) => {
        this.users = users;
      })
    );
  }
  readOne(id: string | null) {
    return this.read().pipe(
      map((users) => {
        const user = users.find((user: User) => user.id == id);
        if (user) {
          return user;
        }
        return {
          name: '',
          age: 0,
          email: '',
          phoneNumber: '',
          position: '',
        };
      })
    );
  }
  create(payload: User) {
    return this.http.post<User>(`/api/users`, payload).pipe(
      tap((user) => {
        this.users = [...this.users, user];
      })
    );
  }
  update(payload: User) {
    return this.http.put<User>(`/api/users/${payload.id}`, payload).pipe(
      tap((user) => {
        this.users = this.users.map((item: User) => {
          if (item.id == user.id) {
            return user;
          }
          return item;
        });
      })
    );
  }
  delete(payload: User) {
    return this.http.delete<User>(`api/users/${payload.id}`).pipe(
      tap(() => {
        this.users = this.users.filter((user: User) => user.id !== payload.id);
      })
    );
  }
}
