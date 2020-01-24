import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-parks-details',
  templateUrl: './parks-details.component.html',
  styleUrls: ['./parks-details.component.scss']
})
export class ParksDetailsComponent implements OnInit {
  @Input()
  details: any;

  @Output()
  parkingGeolocation = new EventEmitter();

  constructor(public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {}

  goToParking() {
    this.parkingGeolocation.emit({ lat: this.details.latitude, lng: this.details.longitude });
  }
}
