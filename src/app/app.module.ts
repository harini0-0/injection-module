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
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'; 
// import {AlertsService} from '@jaspero/ng-alerts';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Observable } from 'rxjs';
// import {MatTableDataSource} from '@angular/material/table';
import 'rxjs/add/observable/forkJoin';
// import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    InjectionmainpageComponent,
    HeaderComponent,
    InjectionLandingpageComponent,
    PatientDetailsCardComponent,
    InjectionListComponent,
    InjectionwaitingroomComponent,
    MainToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    // AlertsService,
    FilterPipeModule,
    // Observable,
    // MatTableDataSourceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
