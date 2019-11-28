import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from "../../../shared/services/navigation.service";
import { ThemeService } from '../../services/theme.service';
import { Subscription } from "rxjs";
import { constants } from "../../../constants";
// import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-sidebar-side',
  templateUrl: './sidebar-side.component.html'
})
export class SidebarSideComponent implements OnInit, OnDestroy, AfterViewInit {
  // private sidebarPS: PerfectScrollbar;
  public menuItems: any[];
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: any;
  constructor(
    private navService: NavigationService,
    public themeService: ThemeService,
    private router: Router,
  ) { }

  ngOnInit() {
    if(constants.landingUrls.indexOf(this.router.url) > -1) {
      this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
      this.menuItems = this.navService.getlandingIconMenuItems()
      
    } else {
      this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
      this.menuItems = this.navService.getMenuItems()
    }
    this.hasIconTypeMenuItem = this.menuItems && this.menuItems.filter(item => item.type === 'icon').length == 0 ? true : false


  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    if(this.menuItemsSub) {
      this.menuItemsSub.unsubscribe()
    }
  }

}
