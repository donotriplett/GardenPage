import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token")
  })
}

@Injectable({
  providedIn: 'root'
})

export class PlantDatabaseService {
private _URL = "https://efa-gardenapp-backend.herokuapp.com/api/product"
  constructor(private _http: HttpClient) { }

  getPlants(): Observable<any> {
    return this._http.get<any>(this._URL)
  }

  deletePlant(id: number) {
    console.log(`${this._URL}/${id}`)
    return this._http.delete(`${this._URL}/${id}`, httpOptions)
  }

}
