import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';



const routes: Routes = [
{path: 'tela1', component: MeuComponenteComponent},
{path: 'tela2', component: SegundoComponenteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
