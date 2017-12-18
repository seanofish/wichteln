import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { UserComponent } from './user/user.component';     // Add this
import { RegisterComponent } from './register/register.component';     // Add this

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
      },
    {
        path: 'register',
        component: RegisterComponent
      },
  ];


  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}