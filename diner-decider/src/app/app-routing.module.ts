import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DinerDeciderComponent } from './diner-decider/diner-decider.component';
import { CreateRoomComponent } from './diner-decider/create-room/create-room.component';
import { RoomComponent } from './diner-decider/room/room.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'diner-decider', component: DinerDeciderComponent },
	{ path: 'diner-decider/create-room',  component: CreateRoomComponent },
  { path: 'diner-decider/room/:id',  component: RoomComponent },
  { path: '**', redirectTo: 'diner-decider', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
