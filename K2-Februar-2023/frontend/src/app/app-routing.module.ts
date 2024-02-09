import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "kupac", component: KupacComponent },
  { path: "prodavac", component: ProdavacComponent },
  { path: "proizvodi", component: ProizvodiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
