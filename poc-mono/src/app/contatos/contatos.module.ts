import { ContatosRoutingModule } from './contatos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos/contatos.component';

@NgModule({
  imports: [CommonModule, ContatosRoutingModule],
  declarations: [ContatosComponent]
})
export class ContatosModule {}
