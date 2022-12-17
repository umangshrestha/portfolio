import { Component, ViewChild } from '@angular/core';
import { ResumeService } from '../service/resume.service';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  address!: string;
  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap

  center!: google.maps.LatLngLiteral;

  constructor(private resume: ResumeService) { }

  ngOnInit(): void {
    this.resume.getAddress().subscribe((address: any) => {
      this.address = address;
      this.center = { lat: address.latitute, lng: address.longitute };
    });
  }
}
