import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
        .green { color: #003300 !important;}
        .bold { font-weight: bold;}
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left : 10px;}
        .well div { color: #bbb;}
    `]
})  
export class EventThumbnailComponent{

   @Input() event:any;
   someproperty:string='Hey some more';

   getTimeClass(){
       const isEarlyStart = this.event && this.event.time === '8:00 am';
       return {green :isEarlyStart,bold: isEarlyStart};
   }

   getTimeStyle():any{
    if(this.event && this.event.time === '8:00 am')
        return {color: '#003300','font-weight':'bold'}
    return {}
   }
//    @Output() eventClick:EventEmitter<string>=new EventEmitter(); 

//    handleClickMe(){
//     this.eventClick.emit(this.event.name);    
//    }

    //  logFoo(){
    //     console.log('foo');    
    // }


}