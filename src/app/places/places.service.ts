import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In The Heart Of New York City','https://static3.mansionglobal.com/production/media/article-images/3f32c767fc327e62abb28a2f9dc8d4a5/large_GettyImages-637703666.jpg', '142.1'),
    new Place('p2', 'Alianz Arena', 'Bayern Munich Football Stadium', 'https://www.fifaultimateteam.it/en/wp-content/uploads/2019/07/allianz-2.jpg', '189.3'),
    new Place('p3', 'Rome Cathedral', 'Rome Cathedral is one of the wonders of the world', 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg', '189.3'),
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
