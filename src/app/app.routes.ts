import { Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    title: 'Busca Livros - Busque seu livro'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Busca Livros - Conheça-nos'
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Busca Livros - Fale conosco'
  },
  {
    path: '',
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListaLivrosComponent
  }
];
