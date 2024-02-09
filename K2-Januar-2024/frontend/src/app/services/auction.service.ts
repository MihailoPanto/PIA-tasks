import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aukcija } from '../models/aukcija';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  uri = 'http://localhost:4000/auctions';

  constructor(private http: HttpClient) {}

  open() {
    return this.http.get<Aukcija[]>(`${this.uri}/open`);
  }

  all() {
    return this.http.get<Aukcija[]>(`${this.uri}/all`);
  }

  bid(aukcija:string,naziv:string, ponuda:number, vlasnik:string){
    const data ={
      aukcija:aukcija,
      naziv:naziv,
      ponuda: ponuda.toString(),
      vlasnik: vlasnik
    }

    return this.http.post(`${this.uri}/bid`, data);

  }

  mine(vlasnik:string) {
    return this.http.get<Aukcija[]>(`${this.uri}/user/${vlasnik}`);
  }
}
