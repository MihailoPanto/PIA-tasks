import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Proizvod } from '../models/proizvod';
import { Narudzbina } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  prijavaNaSistem(kor_ime: string, lozinka: string) {
    const data = {
      kor_ime: kor_ime,
      lozinka: lozinka,
    };
    return this.http.post<Korisnik>(`${this.uri}/login`, data);
  }

  getItems(){
    return this.http.get<Proizvod[]>(`${this.uri}/allItems`);
  }

  addOrder(data:Narudzbina){
    return this.http.post(`${this.uri}/addOrder`, data);
  }

  update(naziv:string,stanje:number){
    const data = {
      naziv: naziv,
      stanje: stanje,
    };
    return this.http.post(`${this.uri}/update`, data);
  }

  getOrders(){
    return this.http.get<Narudzbina[]>(`${this.uri}/allOrders`);
  }
}
