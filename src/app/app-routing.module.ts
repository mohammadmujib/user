import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/new',
    component: UserAddComponent,
    data: {
      isEdit: false,
    },
  },
  {
    path: 'users/:id',
    component: UserEditComponent,
    data: {
      isEdit: true,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
