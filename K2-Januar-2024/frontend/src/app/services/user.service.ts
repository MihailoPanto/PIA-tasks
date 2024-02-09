import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  prijavaNaSistem(kor_ime: string, lozinka: string) {
    const data = {
      korisnicko_ime: kor_ime,
      lozinka: lozinka,
    };
    return this.http.post<Korisnik>(`${this.uri}/login`, data);
  }
}
