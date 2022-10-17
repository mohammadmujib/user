import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [],
})
export class UserFormComponent implements OnInit {
  @Input() user!: User;
  @Input() isEdit!: boolean;
  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<User>();

  inSubmission = false;

  name = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(10),
    Validators.max(100),
  ]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);
  position = new FormControl('', [Validators.required]);

  userForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    position: this.position,
    phoneNumber: this.phoneNumber,
  });

  jobPosition: string[] = [
    'React Developer',
    'Vue Developer',
    'Angular Developer',
    'Full Stack Developer',
    'Front End Developer',
    'Backend Developer',
    'Java Developer',
    'Dot Net Developer',
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.user) {
      this.userForm.setValue({
        name: this.user.name,
        email: this.user.email,
        age: this.user.age,
        phoneNumber: this.user.phoneNumber,
        position: this.user.position,
      });
    }
  }

  handleSubmit() {
    if (this.userForm.valid) {
      const value = this.userForm.value;
      this.create.emit(value);
      this.userForm.reset({
        position: '',
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  handleReset() {
    this.userForm.reset({
      position: '',
    });
  }
  handleUpdate() {
    if (this.userForm.valid) {
      this.update.emit({ id: this.user.id, ...this.userForm.value });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  handleDelete() {
    this.delete.emit({ ...this.user });
  }
}
