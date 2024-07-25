import { Injectable } from '@angular/core';
import { Busmodel } from '../models/busmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  bdata:any;

  tdata:any;

  private jsonUrl = 'http://localhost:3000/bdata'; // Path to your local JSON file
  private url ='http://localhost:3000/tdata';

  constructor(private http: HttpClient) {}

  getbData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }  

  deleteItem(id: number): void {
    if (this.bdata && id >= 0 && id < this.bdata.length) {
      this.bdata.splice(id, 1);
    }
    // Optionally, you can add logic here to delete from an API or save changes
  }

  
  gettData():Observable<any> {
    return this.http.get<any>(this.url);
  }

}
