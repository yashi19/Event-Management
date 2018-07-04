import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html'
})
export class EventsListComponent implements OnInit {
   
    events:any[];
    constructor(private eventService:EventService,private toastrService:ToastrService,private route:ActivatedRoute){

    }

    ngOnInit(){
      this.events=this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName){
        this.toastrService.success(eventName);
    }

    // handleEventClicked(data){
    //     console.log(data);

    // }

}