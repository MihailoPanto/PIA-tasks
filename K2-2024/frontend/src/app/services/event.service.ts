import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  uri = 'http://localhost:4000/events';

  constructor(private http: HttpClient) {}

  getFutureEvents() {
    return this.http.get<Event[]>(`${this.uri}/future`);
  }

  getEvents(username:string) {
    return this.http.get<Event[]>(`${this.uri}/all/${username}`);
  }

  deleteEvent(name:string,date:string) {
    const data = {
      name:name,
      date:date
    }
    return this.http.post(`${this.uri}/delete`, data);
  }

  addEvent(data:any){
    return this.http.post(`${this.uri}/add`, data);
  }
}
