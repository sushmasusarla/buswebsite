import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BusesComponent } from './component/buses/buses.component';
import { TrainsComponent } from './component/trains/trains.component';
import { FlightsComponent } from './component/flights/flights.component';
import { OffersComponent } from './component/offers/offers.component';
import { LoginComponent } from './component/login/login.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { NavinewComponent } from './component/navinew/navinew.component';
import { ServicesComponent } from './component/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusesComponent,
    TrainsComponent,
    FlightsComponent,
    OffersComponent,
    LoginComponent,
    AboutusComponent,
    NavinewComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
