import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit {
  user!: User;
  isEdit!: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.isEdit = this.route.snapshot.data['isEdit'];
    this.userService.readOne(id).subscribe((user: User) => {
      this.user = user;
    });
  }
  onUpdate(user: User) {
    this.userService.update(user).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log('onupdatre err', err);
      },
    });
  }
  onCreate(user: User) {
    this.userService
      .create(user)
      .subscribe(() => console.log('created sucessFully'));
  }
  onDelete(user: User) {
    this.userService
      .delete(user)
      .subscribe(() => console.log('deleted successfully'));
  }
}
