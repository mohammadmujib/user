import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: [],
})
export class UserTableComponent implements OnInit {
  @Input() users!: User[];
  @Input() isHome!: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  onDelete(user: User) {
    this.userService.delete(user).subscribe(() => {
      this.users = this.users.filter((item: User) => item.id !== user.id);
    });
  }
}
