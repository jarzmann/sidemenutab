import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public appPages: any;

  constructor(menu: MenuService) {
    this.appPages = menu.appPages;
  }

  ngOnInit() {
  }

}
