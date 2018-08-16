import { ContatosComponent } from './contatos/contatos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const contatosRoutes: Routes = [{ path: '', component: ContatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(contatosRoutes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule {}
