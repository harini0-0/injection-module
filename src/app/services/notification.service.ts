import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {interval} from "rxjs";
import { startWith, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams, RequestOptions } from '@angular/http';
import { prepareURL } from '../../app/utils';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/empty';
import { JWTHttpClient } from '../services/jwthttp.service';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationService {

  params: URLSearchParams;
  requestOptions: RequestOptions;

  constructor(private http: JWTHttpClient) {
    this.params = new URLSearchParams();
    this.requestOptions = new RequestOptions();
  }

  getData(status: string = 'N'): Observable<any> {
    this.params.set('status', status);
    this.requestOptions.search = this.params;
    return this.http
      .request(prepareURL(environment.server_base_url, 'pharmarecords'), {params : this.params}).pipe(
      map(response => JSON.parse(response['_body'])));
  }
  loopForData(): Observable<any> {
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => this.getData()));
  }
  createDispensed(object): Observable<any> {
    return this.http
      .post(prepareURL(environment.server_base_url, 'dispensed/'), object);

  }

  getPatientPharmaHistory(patient_history_id) {
    return this.http.get(prepareURL(environment.server_base_url, 'patienthistory') + '?id=' + patient_history_id).pipe(
      map((data) => data.json()));
  }


  tempqueue()
  {
    return this.http.get(prepareURL(environment.server_base_url, 'pharmawaitingroom'));
  }

  getQueue() {
    return interval(2000).pipe(
      switchMap(() => this.http.get(prepareURL(environment.server_base_url, 'pharmawaitingroom')).pipe(
      map((data) => data.json()))
      .pipe(map((array) => array.sort(item => item.token)))));
  }

  
  // this.http.get(prepareURL(environment.server_base_url, 'prescriptiondetail', history_item.id, 'me'))

  getPrescriptionDetials(history_id) {
    return this.http.get(prepareURL(environment.server_base_url, 'prescriptiondetail',history_id,'me')).pipe(
                    map((response) => response.json()));
  }

  popFromQueue(pharma_waitingroom_id)
  {
    return this.http.delete(prepareURL(environment.server_base_url, 'pharmawaitingroom', pharma_waitingroom_id))
  }





}
