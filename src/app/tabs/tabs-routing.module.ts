import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { AboutPageModule } from '../about/about.module';
import { ContactPageModule } from '../contact/contact.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AboutPageModule, ContactPageModule],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
