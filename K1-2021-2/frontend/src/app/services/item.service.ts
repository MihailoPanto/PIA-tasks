import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:8080"

  getItems(){
    return this.http.get<Item[]>(`${this.backendUrl}/item/all`);
  }
}
