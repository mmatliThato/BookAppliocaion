import { EditbookComponent } from './app/components/editbook/editbook.component';
import { HomeComponent } from './app/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'book/create',
    component: EditbookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
