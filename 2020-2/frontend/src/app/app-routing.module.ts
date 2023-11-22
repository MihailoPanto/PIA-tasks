import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VisitorStartComponent } from './visitor-start/visitor-start.component';
import { WorkerStartComponent } from './worker-start/worker-start.component';
import { WorkerSecondComponent } from './worker-second/worker-second.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "visitor", component: VisitorStartComponent},
  {path: "worker-start", component: WorkerStartComponent},
  {path: "worker-second", component: WorkerSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
