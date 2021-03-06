import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from '../../layouts/layouts.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Dashboard' },
  }
];

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
