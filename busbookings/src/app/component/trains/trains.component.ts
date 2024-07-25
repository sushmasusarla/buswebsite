import { Component } from '@angular/core';
import { BusserviceService } from 'src/app/service/busservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent {
  traininfo:any;
  url:string  ='http://localhost:3000/tdata'
  constructor(private http: HttpClient, private train: BusserviceService) { }

  ngOnInit(): void {
    this.train.gettData().subscribe(data => {
      this.traininfo = data; // Assign fetched JSON data to your variable

      console.log(this.traininfo)
    });
  }


}
