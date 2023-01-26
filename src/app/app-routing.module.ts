import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ChampionshipsComponent } from './championships/championships.component';

const routes: Routes = [
  

  { path: 'about-me', component: AboutMeComponent },
  { path: 'championships', component: ChampionshipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
