import { ModuleWihProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

const appRoutes:Routes=[{
  path:'',
  redirectTo:'/login',
  pathMath:'full'
},{
  path:'login',
  component:LoginComponent
},{
  path:"sign",
  component:''
}];

export const routing:ModuleWithProciders=RouterModule.forRoot(appRoutes);