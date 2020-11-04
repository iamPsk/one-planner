import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [HomeComponent, TopNavComponent, SideNavComponent, MainComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
