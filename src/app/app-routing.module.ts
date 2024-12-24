import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { observable } from 'rxjs';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

const routes: Routes = [
  {path:'observable-demo', component: ObservableDemoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
