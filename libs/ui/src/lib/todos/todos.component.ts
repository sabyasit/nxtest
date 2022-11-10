import { Component, OnInit } from '@angular/core';
import { UserService } from '@di/shared'

@Component({
  selector: 'di-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private userService: UserService) {
    console.log(this.userService);
  }

  ngOnInit(): void {
    console.log(1);
  }
}
