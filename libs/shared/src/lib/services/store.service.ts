import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
 })
export class StoreService {

  constructor() { 
    console.log('store')
    debugger;
  }

  store() {

  }
}
