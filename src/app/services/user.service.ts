import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { User } from "../models/user"
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _URL = "https://efa-gardenapp-backend.herokuapp.com/api/auth/login"

  constructor(private http: HttpClient) { }

  signIn(user: User): Observable<any> {
    return this.http.post<any>(this._URL, user, httpOptions)
  }
}
