import { Component,inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:HousingLocation[]=[];
  housingService:HousingService=inject(HousingService);

  constructor(){
    this.housingLocationList=this.housingService.getAllHousingLocations();
  }
}