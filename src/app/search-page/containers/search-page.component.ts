import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  parkingPosition;

  constructor() {}

  ngOnInit() {}

  goToParking(parkingPosition) {
    this.parkingPosition = parkingPosition;
  }
}
