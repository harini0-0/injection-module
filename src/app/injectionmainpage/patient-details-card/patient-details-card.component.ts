import { Component, OnInit } from '@angular/core';
import { InjectionmainpageComponent } from '../injectionmainpage.component';

@Component({
  selector: 'app-patient-details-card',
  templateUrl: './patient-details-card.component.html',
  styleUrls: ['./patient-details-card.component.css']
})
export class PatientDetailsCardComponent implements OnInit {
  para = new InjectionmainpageComponent();
  constructor() { }

  ngOnInit(): void {
  }

}
