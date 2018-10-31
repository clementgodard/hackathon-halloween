import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { BonbonsComponent } from './bonbons/bonbons.component';

const routes: Routes = [
  {path: '', component: MapComponent},
<<<<<<< HEAD
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
=======
  {path: 'bonbon', component: BonbonsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
>>>>>>> ameliorationCarte
  exports: [RouterModule]
})
export class AppRoutingModule { }
