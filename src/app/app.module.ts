import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ConnectionComponent } from './connection/connection.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { PageBonbonsComponent } from './page-bonbons/page-bonbons.component';
import { CandyApiService } from './candy-api.service';
import { BonbonsComponent } from './bonbons/bonbons.component';
import { TriBonbonPipe } from './tri-bonbon.pipe';
import { MapService } from './map.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ConnectionComponent,
    PageBonbonsComponent,
    BonbonsComponent,
    TriBonbonPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CommonModule,
    PortalModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CandyApiService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
