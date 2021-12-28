import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material : 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';

// Components : 
import { AppComponent } from './app.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { GameBodyComponent } from './game-body/game-body.component';
import { LeaderboardBodyComponent } from './leaderboard-body/leaderboard-body.component';


// Routes : 
const appRoutes: Routes = [
  { path: 'leaderboard', component: LeaderboardBodyComponent },
  { path: '', component: GameBodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuToolbarComponent,
    GameBodyComponent,
    LeaderboardBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
