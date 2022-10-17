import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.read().subscribe((users: User[]) => {
      this.users = users;
    });
  }
  onDelete(user: User) {
    // this.users = this.userService.deleteOne(user);
    this.userService.delete(user).subscribe(() => {
      console.log('deleted');
      // this.users = this.users.filter((user: User) => user.id !== payload.id);
    });
    this.users = this.users.filter((item: User) => item.id !== user.id);
  }
  deleteSelected() {
    this.users = this.users.filter((user: User) => {});
  }
}
