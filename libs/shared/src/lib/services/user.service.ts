import { Injectable } from '@angular/core';
import { DataService } from '@di/shared';

@Injectable({
  providedIn: 'root',
 })
export class UserService {

  constructor(private dataService: DataService) { 
    console.log(this.dataService)
  }

  user() {
    console.log(2)
  }
}
