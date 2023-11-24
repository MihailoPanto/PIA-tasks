import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CustomerStartComponent } from './customer-start/customer-start.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {path: "", component: LoginComponentComponent},
  {path: "customer", component: CustomerStartComponent},
  {path: "customer-order", component: CustomerOrderComponent},
  {path: "worker", component:WorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
