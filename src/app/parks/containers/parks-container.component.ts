import { Component, OnInit } from '@angular/core';

import { Parks } from '../models/parks.interface';
import { ParksService } from '../services/parks-service.service';

@Component({
  selector: 'app-parks-container',
  templateUrl: './parks-container.component.html',
  styleUrls: ['./parks-container.component.scss']
})
export class ParksContainerComponent implements OnInit {
  parks: Parks[];
  freeplaces: object[];
  constructor(private parksService: ParksService) {}

  ngOnInit() {
    this.parksService.getAllParks().subscribe((parksFromDB: Parks[]) => (this.parks = parksFromDB));
    this.parksService.getFreePlaces().subscribe((freePlacesFromDB: []) => (this.freeplaces = freePlacesFromDB));
  }
}
