import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BusesComponent } from './component/buses/buses.component';
import { TrainsComponent } from './component/trains/trains.component';
import { FlightsComponent } from './component/flights/flights.component';
import { OffersComponent } from './component/offers/offers.component';
import { LoginComponent } from './component/login/login.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"buses", component:BusesComponent},
  { path:"trains", component:TrainsComponent},
  { path:"flights", component:FlightsComponent},
  { path:"offers", component:OffersComponent},
  { path:"login", component:LoginComponent},
  { path:"aboutus", component:AboutusComponent},
  {path:"services", component:ServicesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
