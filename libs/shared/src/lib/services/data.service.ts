import { Injectable } from '@angular/core';
import { StoreService } from '@di/shared';


@Injectable({
  providedIn: 'root',
 })
export class DataService {

  constructor(private storeService: StoreService) { 
    console.log(this.storeService)
  }

  data() {

  }
}
