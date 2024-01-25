import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

    private subject= new Subject();

    emit(eventName : String , payLoad : any){
        this.subject.next({eventName,payLoad})
    }
    listen(eventName : String , callBack : (event : any)=>void){
        this.subject.asObservable().subscribe((nextObj : any)=>{
            if (eventName == nextObj.eventName)
            callBack(nextObj.payLoad)
        });
    }
}
