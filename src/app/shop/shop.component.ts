import { Component, OnInit } from '@angular/core';
import { PlantDatabaseService } from "../services/plant-database.service"

@Component({
  selector: 'app-shop', 
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  plants = []
  token = localStorage.getItem("token")

  constructor(private _db: PlantDatabaseService) { }

  ngOnInit() {
    this.fetchPlants()
  }

  fetchPlants() {
    this._db.getPlants().subscribe((res: any) => this.plants = res )
  }

  authDelete(id: number) {
    this._db.deletePlant(id).subscribe((res: any) => { console.log(res); this.fetchPlants() })
  }

}
