import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from '@di/shared'
import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [UiRoutingModule, CommonModule, SharedModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
