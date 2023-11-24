import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Comment } from '../models/Comment';



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:8080"

  getComments(i:Item){
    return this.http.post<Comment[]>(`${this.backendUrl}/comment/item`,i);
  }

  addComment(c:Comment){
    return this.http.post<number>(`${this.backendUrl}/comment/add`,c);
  }

  getAll(){
    return this.http.get<Comment[]>(`${this.backendUrl}/comment/all`);
  }

  accept(c:Comment){
    return this.http.post<number>(`${this.backendUrl}/comment/accept`,c);
  }

  decline(c:Comment){
    return this.http.post<number>(`${this.backendUrl}/comment/decline`,c);
  }
}
