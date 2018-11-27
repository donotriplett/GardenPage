import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlantDatabaseService {
private _URL = "https://efa-gardenapp-backend.herokuapp.com/api/product"
  constructor(private _http: HttpClient) { }

  getPlants(): Observable<any> {
    return this._http.get<any>(this._URL)
  }

  deletePlant(id: number): Observable<any> {
    return this._http.delete<any>(`${this._URL}/${id}`)
  }

}
