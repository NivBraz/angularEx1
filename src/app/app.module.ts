import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowActorComponent } from './show-actor/show-actor.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

import { dbService } from "./services/dbService";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowActorComponent,
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    dbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
