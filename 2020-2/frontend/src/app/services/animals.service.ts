import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:8080"

  getAnimals(){
    return this.http.get<Animal[]>(`${this.backendUrl}/animal/all`);
  }

  sortByWeight(animals: Animal[]): Animal[]{
      return animals.sort((w1,w2)=>{
      return w1.weight - w2.weight;
    });
  }

  addAnimal(a:Animal){
    return this.http.post<number>(`${this.backendUrl}/animal/add`,a)
  }
}
