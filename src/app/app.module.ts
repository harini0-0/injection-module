import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectionmainpageComponent } from './injectionmainpage/injectionmainpage.component';
import { HeaderComponent } from './injectionmainpage/header/header.component';
import { InjectionLandingpageComponent } from './injection-landingpage/injection-landingpage.component';
import { PatientDetailsCardComponent } from './injectionmainpage/patient-details-card/patient-details-card.component';
import { InjectionListComponent } from './injectionmainpage/injection-list/injection-list.component';
import { InjectionwaitingroomComponent } from './injectionwaitingroom/injectionwaitingroom.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectionmainpageComponent,
    HeaderComponent,
    InjectionLandingpageComponent,
    PatientDetailsCardComponent,
    InjectionListComponent,
    InjectionwaitingroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
