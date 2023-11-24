import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerStartComponent } from './customer-start/customer-start.component';
import { CustomerSecondComponent } from './customer-second/customer-second.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "customer-start", component: CustomerStartComponent},
  {path: "customer-second", component: CustomerSecondComponent},
  {path: "worker", component: WorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
