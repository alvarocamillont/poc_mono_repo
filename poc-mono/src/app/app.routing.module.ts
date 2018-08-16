import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'contatos',
    loadChildren: '../app/contatos/contatos.module#ContatosModule'
  },
  {
    path: 'eventos',
    loadChildren: '../app/eventos/eventos.module#EventosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
