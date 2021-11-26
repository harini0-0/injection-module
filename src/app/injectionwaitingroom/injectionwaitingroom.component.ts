import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injectionwaitingroom',
  templateUrl: './injectionwaitingroom.component.html',
  styleUrls: ['./injectionwaitingroom.component.css']
})
export class InjectionwaitingroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

// import { URLSearchParams, RequestOptions } from '@angular/http';
// import { prepareURL } from  "../../../../app/utils"
// import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import {WorkbenchService} from "../services/workbench.service"
import { AlertsService } from '@jaspero/ng-alerts';
import { FilterPipe } from 'ngx-filter-pipe';

import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {forkJoin } from 'rxjs';
// import {} from 'rxjs/Rx'
import {of} from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { flatMap, map, catchError } from 'rxjs/operators';
export interface MedicineColumn {
  medicine_name: string;
  quantity: number;
  dose: string;
  remarks: string;
}



// @Component({
//   selector: 'app-injectionwaitingroom',
//   templateUrl: './injectionwaitingroom.component.html',
//   styleUrls: ['./injectionwaitingroom.component.css']
// })
// export class InjectionWaitingroomComponent implements OnInit {

//   constructor(private filterPipe: FilterPipe, private _alerts: AlertsService,private workservice: WorkbenchService, private notificationService: NotificationService,public http:HttpClient) { }

//   Pharmarequest$=[];
//   PharmaRequestFliter$ = [];
//   CurrentPatient:any = null;
//   istyping = false;
//   displayedColumns = ['Medicine Name', 'Quantity', 'Dose', 'Remarks'];
//   dataSource = null;
//   CurrentPatientIndex = null;


//   ngOnInit() {

//     this.notificationService.getQueue()
//     flatMap(persons => {
//       return (forkJoin(persons.
//         map(person => {
//         return forkJoin([of({id:person.id,w_id:person.w_id,p_id:person.patient_id,g_id:person.guest}),this.notificationService.getPrescriptionDetials(person.history)]).pipe(
//         map(data=>{
//           if(data.length >=1){
//           let result = 
//           {
//             details:data[1],
//             id:data[0]['id'],
//             w_id:data[0]['w_id'],
//             p_id:data[0]['p_id'],
//             g_id:data[0]['g_id']
//           }
//           return (result)
//         }
//         else{
//           return null;
//         }
//         }))
        
//       })));
//     }).subscribe(data=>{
//       let temp_list$ = [];
//       data.forEach(ele=>{

//         let data_;
//         if(ele && ele['p_id'] && ele['details'].length>0)
//         {
//           data_= {
//           id:ele['id'],
//           w_id:ele['w_id'],
//           p_id:ele['p_id'],
//           g_id:ele['g_id'],
//           patient_type:ele['details'][0]['patient_history']['patient']['patient_type'],
//           doctor_name:ele['details'][0]['patient_history']['doctor']['person']['name'],
//           patient_name:ele['details'][0]['patient_history']['patient']['name'],
//           general_remarks:ele['details'][0]['patient_history']['general_remarks'],
//           specialization:ele['details'][0]['patient_history']['doctor']['specialization'],
//           medicinelist: ele['details']
//         }
//       }
//       else if(ele && ele['g_id'] && ele['details'].length>0){
//         data_= {
//           id:ele['id'],
//           w_id:ele['w_id'],
//           p_id:ele['p_id'],
//           g_id:ele['g_id'],
//           patient_type:"GUEST",
//           doctor_name:ele['details'][0]['patient_history']['doctor']['person']['name'],
//           patient_name:ele['details'][0]['patient_history']['guest']['name'],
//           general_remarks:ele['details'][0]['patient_history']['general_remarks'],
//           specialization:ele['details'][0]['patient_history']['doctor']['specialization'],
//           medicinelist: ele['details']
//         }
//       }
//         if(data_)
//          temp_list$.push(data_)
//       })
      
      
//       if(!this.istyping)
//       this.Pharmarequest$ = temp_list$

//       this.PharmaRequestFliter$ = temp_list$
//       if(this.CurrentPatientIndex!=null)
//       {
//         // console.log("shai",this.CurrentPatientIndex)
//         // console.log(this.Pharmarequest$)
//         this.setPatient(temp_list$[this.CurrentPatientIndex],this.CurrentPatientIndex)
//       }
//     })
  
//   }



//   concatJson(JsonArray)
//   {

//     if(JsonArray.length<2) return 
//     let jsonfinal = JsonArray[0]
//     JsonArray.splice(0,1)
//     JsonArray.forEach(element => {
//       jsonfinal = jsonfinal.concat(element)
//     });
//     return jsonfinal
//   }



//   concatCommonJsonbyfiled(JsonArray,field)
//   {
//     return JsonArray.reduce(function(index, obj) {
//       index[obj[field]] = Object.assign({}, obj, index[obj[field]]);
//       return index;
//   }, []).filter(function(res, obj) {
//       return obj;
//   });
// }

//   setPatient(patient,index)
//   { 
//     this.CurrentPatientIndex = index
//     this.dataSource = new MatTableDataSource(patient.medicinelist);
//     this.CurrentPatient = patient
   
//   }
//   // applyFilter(value)
//   // {
//   //   if(value.length>0)
//   //   this.istyping = true
//   //   else{
//   //   this.istyping = false
//   //   this.Pharmarequest$ = this.PharmaRequestFliter$
//   //   }
//   //   console.log(value.length)
//   //   let filteredData = this.Pharmarequest$.filter(
//   //     datum => (datum.patient_name.indexOf(value) > -1 || datum.doctor_name.indexOf(value) > -1||datum.specialization.indexOf(value) > -1));
//   //   this.Pharmarequest$ = filteredData
//   //   console.log(filteredData);

//   // }

//   SubmitToQueue()
//   {

//       this.notificationService.popFromQueue(this.CurrentPatient.id).pipe(
//       flatMap(res=>this.workservice.popQueue(this.CurrentPatient.w_id))
//       Promise().catch(err=>{
//         console.log(err)
//         this.CurrentPatient = null

//         this._alerts.create("error", "Erro while submitting");
//       })
//       .then(data=>{
//         console.log(data)
//         this.CurrentPatient = null
//         this.Pharmarequest$.splice(this.CurrentPatientIndex,1);
//         this.CurrentPatientIndex =null
//         this._alerts.create("success", "Submitted");
//       }))

//       // submit the record and update in billing table

//   }

//   RemoveFromQueue()
//   {

//      this.notificationService.popFromQueue(this.CurrentPatient.id).pipe(
//       flatMap(res=>this.workservice.popQueue(this.CurrentPatient.w_id)),
//       .toPromise().catch(err=>{
//         console.log(err)
//         this.CurrentPatient = null
//         this._alerts.create("error", "Erro while submitting");

//       }),
//       then(data=>{
//         console.log(data)
//         this.CurrentPatient = null
//         this.Pharmarequest$.splice(this.CurrentPatientIndex,1);
//         this.CurrentPatientIndex =null
//         this._alerts.create("success", "Deleted");

//       }))
//   }




//   getAge(dob) {
//     if (dob)
//       return moment().diff(dob, 'years');
//     return "";
//   }





//   applyFilter(filterValue: string) {

//     if (this.Pharmarequest$ == []) { this.Pharmarequest$ = this.PharmaRequestFliter$ }
//     if (/\S/.test(filterValue)) {
//       this.istyping = true
//       let f_patient_name = (this.filterPipe.transform(this.PharmaRequestFliter$, { patient_name: filterValue }));
//       let f_doctor_name = (this.filterPipe.transform(this.PharmaRequestFliter$, { doctor_name: filterValue }));
//       let f_specialization = (this.filterPipe.transform(this.PharmaRequestFliter$, { specialization: filterValue }));
     
//       let FinalJsonArray = []
//       FinalJsonArray.push(f_patient_name)
//       FinalJsonArray.push(f_doctor_name)
//       FinalJsonArray.push(f_specialization)
      
//       let finalfilter = this.concatJson(FinalJsonArray)
//       finalfilter = this.concatCommonJsonbyfiled(finalfilter,'id')
//       finalfilter.sort((a,b)=>b.id-a.id)
//       if(finalfilter.length>0)
//       this.Pharmarequest$ = finalfilter
//       else
//       this.Pharmarequest$ = []

//     }
//     else if (filterValue == null) {
//       this.Pharmarequest$ = this.PharmaRequestFliter$;
//       this.istyping = false
//     }
//     else {
//       this.Pharmarequest$ = this.PharmaRequestFliter$;
//       this.istyping = false

//     }


//   }











//   submit()
//   {
//     this.notificationService.popFromQueue(1).subscribe(data=>{
//       // console.log(data)
//     })
//   }



// }
// function then(arg0: (data: any) => void): import("rxjs").OperatorFunction<unknown, unknown> {
//   throw new Error('Function not implemented.');
// }

