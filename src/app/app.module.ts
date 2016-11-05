import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

//Firebase Config
export const firebaseConfig = {
  apiKey: 'AIzaSyDy3keUHNQdyxi0CEs-jkY51xbUIb99K8I',
  authDomain: 'halp-e491e.firebaseapp.com',
  databaseURL: 'https://halp-e491e.firebaseio.com',
  storageBucket: 'halp-e491e.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
