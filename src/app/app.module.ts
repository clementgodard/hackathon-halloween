import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ConnectionComponent } from './connection/connection.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CommonModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
