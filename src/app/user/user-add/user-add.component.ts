import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styles: [],
})
export class UserAddComponent implements OnInit {
  user!: User;
  isEdit!: boolean;
  users: User[] = [];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onCreate(user: User) {
    this.userService.create(user).subscribe(() => {
      console.log('created sucessFully');
    });

    this.users = [...this.users, user];
    console.log(this.users);
  }
}
