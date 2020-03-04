import { Component, OnInit, ViewChild } from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {animateText, onMainContentChange, onSideNavChange} from '../../../core/animations/animations';
import { MatSidenav } from '@angular/material';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    onMainContentChange,
    animateText,
    onSideNavChange
  ]
})

export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  show = false;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  public hideMenuContent = true;
  public sideNavState = false;
  public linkText = false;

  public pages: Page[] = [
    {name: 'Inbox', link: 'some-link', icon: 'inbox'},
    {name: 'Starred', link: 'some-link', icon: 'star'},
    {name: 'Send email', link: 'some-link', icon: 'send'},
  ]

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    console.log('sidenavtoogled');
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
      this.hideMenuContent = this.sideNavState;
    }, 200);

    this.sidenavService.sideNavState$.next(this.sideNavState);
  }


}
