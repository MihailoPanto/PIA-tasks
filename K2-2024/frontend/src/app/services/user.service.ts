import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {}

  prijavaNaSistem(kor_ime: string, lozinka: string) {
    const data = {
      kor_ime: kor_ime,
      lozinka: lozinka,
    };
    return this.http.post<User>(`${this.uri}/login`, data);
  }

  userUpdate(kor_ime: string, ime: string, prezime: string, mejl: string) {
    const data = {
      kor_ime: kor_ime,
      ime: ime,
      prezime: prezime,
      mejl: mejl,
    };
    return this.http.post<User>(`${this.uri}/update`, data);
  }

  // dohvatiKorisnika(kor_ime: string) {
  //   const data = {
  //     kor_ime: kor_ime,
  //   };
  //   return this.http.post<Korisnik>(`${this.uri}/getUser`, data);
  // }
}
