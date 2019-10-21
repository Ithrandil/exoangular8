import { Component, Input, OnInit } from '@angular/core';

import { Parks } from '../../models/parks.interface';

@Component({
  selector: 'app-parks-details',
  templateUrl: './parks-details.component.html',
  styleUrls: ['./parks-details.component.scss']
})
export class ParksDetailsComponent implements OnInit {
  @Input()
  details: Parks;

  displayDescription = false;

  constructor() {}

  ngOnInit() {}

  toggleDescription() {
    this.displayDescription = !this.displayDescription;
  }
}
