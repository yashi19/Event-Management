import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event-service';
import { ToastrService } from './shared/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './shared/event-route-activator.service';
import { EventListResolver } from './shared/event-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EventService,ToastrService,EventRouteActivator,EventListResolver,
    {provide:'canDeactivateCreateEvent',useValue:checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm("You haven't saved this event, do you really want to cancel?" );
  return true;
}