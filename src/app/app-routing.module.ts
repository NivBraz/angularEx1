import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowActorComponent } from './show-actor/show-actor.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

// import { PreferencesComponent } from './preferences/preferences.component';


const appRoutes: Routes =[
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'showActor', component: ShowActorComponent},
    { path: 'showMovie', component: ShowMovieComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}