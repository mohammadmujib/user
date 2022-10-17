import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserEditComponent, UserAddComponent, UserTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [UserListComponent, UserFormComponent, UserEditComponent],
})
export class UserModule {}
