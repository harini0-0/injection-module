
import { Injectable } from '@angular/core';
import { URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { JWTHttpClient } from '../services/jwthttp.service';
import { interval, Observable } from 'rxjs';
import { ErrorFeedbackService } from '../services/error-feedback.service';
import { mergeMap } from 'rxjs/operators';
import { map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { replaceKeys, prepareURL } from '../utils';
import { environment } from '../../environments/environment';

@Injectable()
export class WorkbenchService {

  constructor(private http: JWTHttpClient, private feedbackService: ErrorFeedbackService) { }

  getDoctor() {
    return this.http.get(prepareURL(environment.server_base_url, 'doctors', 'me'))
      .map((data) => data.json());
  }

  getQueue(doctor_id) {
    return interval(1000)
      .switchMap(() => this.http.get(prepareURL(environment.server_base_url, 'waitingroom') + '?doctor=' + doctor_id))
      .map((data) => data.json())
      .map((array) => array.sort(item => item.token));
  }
  popQueue(waiting_item_id) {
    return this.http.delete(prepareURL(environment.server_base_url, 'waitingroom', waiting_item_id))
  }

  submitLabRequest(requestedTests) {
    return this.http.post(prepareURL(environment.server_base_url, 'labreports'), requestedTests);
  }

  submitDiagnosis(doctor_id, patient_id, indication, general) {
    return this.http.post(prepareURL(environment.server_base_url, 'patienthistory'), {
      "doctor_id": doctor_id,
      "patient_id": patient_id,
      "guest_id":null,
      "indication": indication,
      "general": general
    }).catch((err) => this.feedbackService.showFeedback(err, { "400": "Please Enter indication (eg:Viral fever)" }));
  }


  submitDiagonosisForGuest(data)
  {
    return  this.http.post(prepareURL(environment.server_base_url, 'patienthistory'), data).catch((err) => this.feedbackService.showFeedback(err, { "400": "Please Enter indication (eg:Viral fever)" }));
  }

  getLabReport(labreport_id) {
    return this.http.get(prepareURL(environment.server_base_url, 'labreports', labreport_id))
      .map((data) => data.json());
  }

  getLabReports(patient_id) {
    return this.http.get(prepareURL(environment.server_base_url, 'labreports') + '?done=' + true + '&patient_id=' + patient_id)
      .map((data) => data.json());
  }

  getQueueOnce()
  {
    return this.http.get(prepareURL(environment.server_base_url, 'pharmawaitingroom'))
    .map((data) => data.json())
  }

  getPatientHistory(patient_id) {
    return this.http.get(prepareURL(environment.server_base_url, 'patienthistory') + '?patient_id=' + patient_id)
      .map((data) => data.json());
  }

  postPatientPrescription(url,data_to_be_posted,options)
  {
     return this.http.post(url, data_to_be_posted, options)
  }



  pushPharmaQueue(post_data,options)
  {
    const url = prepareURL(environment.server_base_url, 'pharmawaitingroom');
    return this.http.post(url,post_data,options);
  }

  UpdatePrescription(data,id)
  {
    return this.http.put((prepareURL(environment.server_base_url, 'prescriptiondetail',id)),data)
    .map((response) => response.json())
  }

  getPharmaWaitingRoomInfo(his_id)
  {
      return this.http.get(prepareURL(environment.server_base_url, 'pharmawaitingroom'))
       
  }


  getPharmaDocByHisID(his_id)
  {
    return Observable.forkJoin(this.getPharmaWaitingRoomInfo(his_id)
    .map((data) => data.json()),this.http.get(prepareURL(environment.server_base_url, 'prescriptiondetail', his_id, 'me')).map((data) => data.json()))
  }

  addPrescription(data)
  {
    return this.http.post((prepareURL(environment.server_base_url, 'prescriptiondetail')),data)
    .map((response) => response.json())
  }


  deletePrescription(id)
  {
    return this.http.delete((prepareURL(environment.server_base_url, 'prescriptiondetail',id)))
    .map((response) => response.json())
  }


}
