import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApparelComponent } from './apparel/apparel.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecentsComponent } from './recents/recents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApparelComponent,
    ShoesComponent,
    BagsComponent,
    FavoritesComponent,
    RecentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
