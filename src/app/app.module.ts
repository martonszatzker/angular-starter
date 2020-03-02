import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ViewChild} from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MatSidenav} from '@angular/material';
import {ContainerComponent} from './shared/container/container.component';
import {DashboardComponent} from './shared/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
