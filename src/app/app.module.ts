import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CandyApiService } from './candy-api.service';
import { BonbonsComponent } from './bonbons/bonbons.component';
import { TriBonbonPipe } from './tri-bonbon.pipe';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BonbonsComponent,
    TriBonbonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CandyApiService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
