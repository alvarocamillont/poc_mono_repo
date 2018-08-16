import { EventosRoutingModule } from './eventos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  imports: [CommonModule, EventosRoutingModule],
  declarations: [EventosComponent]
})
export class EventosModule {}
