
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './shared/event-route-activator.service';
import { EventListResolver } from './shared/event-list-resolver.service';

export const appRoutes = [
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path: 'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'},
<<<<<<< HEAD
   
    {path:'profiles',loadChildren:'./user/user.module#UserModule'},
<<<<<<< HEAD
    {path:'users',loadChildren:'./user/user.module#UserModule'},
=======
     {path:'users',loadChildren:'./user/user.module#UserModule'},
>>>>>>> task2
=======
>>>>>>> 075f77fdd9e4bd5094ff1a4baf6649029c01adbb
    
] 
