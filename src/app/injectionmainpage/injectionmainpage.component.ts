import { Component, OnInit } from '@angular/core';
import { Patient, Medicine } from '../models/instances.model';

@Component({
  selector: 'app-injectionmainpage',
  templateUrl: './injectionmainpage.component.html',
  styleUrls: ['./injectionmainpage.component.css']
})
export class InjectionmainpageComponent implements OnInit {
  public current = 0;  
  public patients: Patient [] = [
    new Patient("Always Sick", "STUDENT", "Doctor", "General", 
    [
      new Medicine("Insulin","1","10ml", "NAN"),
      new Medicine("Morphine","1","2ml","Don't administer more than 1 dose"),
      new Medicine("Covishield", "1","15ml","Visit for 2nd dose after time period of 2 months")
    ]
    ),
    new Patient("Always Sick2", "STUDENT", "Doctor", "General", 
    [
      new Medicine("Insulin2","1-2-1","100ml", "NAN2"),
    ]
    ),
  ];
  // static object: any;
  // static patients: any;

  object(): Patient[]{
    return this.patients;
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
