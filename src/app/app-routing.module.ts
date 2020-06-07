import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApparelComponent } from './apparel/apparel.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecentsComponent } from './recents/recents.component';


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'apparel', component: ApparelComponent },
    { path: 'shoes', component: ShoesComponent },
    { path: 'bags', component: BagsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'recents', component: RecentsComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
