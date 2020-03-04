import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {onMainContentChange, popOverState} from './core/animations/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidenavService} from './shared/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    popOverState, onMainContentChange
  ]
})
export class AppComponent {
  show = false;

  @ViewChild('sidenav') sidenav: MatSidenav;

  public onSideNavChange: boolean;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    });
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

}
