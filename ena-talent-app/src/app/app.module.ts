import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingComponent } from './components/voting/voting.component';
import { CardComponent } from './components/voting/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    CardComponent
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
