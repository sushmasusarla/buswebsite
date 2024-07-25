import { Component } from '@angular/core';
import * as navbar from '../assets/db.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'busbookings';
  navbar:any;
  navs:any;
  url: string ='/assets/db.json';
  constructor (private htpp:HttpClient, private ram:HttpClient) {

    
    this.htpp.get(this.url).subscribe((data: any) => {
      this.navbar = data.navbar;
    });

    this.htpp.get(this.url).subscribe((data: any)=> {
      this.navs = data.navs;
    });


    
  }


}
