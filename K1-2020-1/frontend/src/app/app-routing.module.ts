import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "customer", component: CustomerComponent},
  {path: "worker", component: WorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
