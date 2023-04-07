import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Dependency Injection
  constructor(private _HttpClient:HttpClient) { }



  getContacts():Observable<any>
  {
    return this._HttpClient.get('https://my-json-server.typicode.com/mabukoush1/contacts/db')
  }

}
