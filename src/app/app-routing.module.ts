import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
  	{ path: 'test', component: HelloComponent }
];


@NgModule({
   	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule],
  	declarations: []
})
export class AppRoutingModule {

 }
