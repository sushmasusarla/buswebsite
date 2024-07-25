import { Component, OnInit } from '@angular/core';
import { BusserviceService } from 'src/app/service/busservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent  implements OnInit  {
  businfo:any

  constructor(private bus: BusserviceService, private http:HttpClient) {}

  ngOnInit(): void {
    this.bus.getbData().subscribe(data => {
      this.businfo = data; // Assign fetched JSON data to your variable

      console.log(this.businfo)
    });
  }

  delete(index: 1): void {
    this.bus.deleteItem(index); // Call delete method from service
    // Optionally, you can refresh data or handle any UI updates here

    console.log('Item deleted')
  }
  

}
