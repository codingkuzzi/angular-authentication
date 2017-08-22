import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2'

import { AppComponent } from './app.component';
import { AuthService} from './providers/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBRMBGRVCUqsuDtXiWYi5ohMCr4eGF4Tzs",
   authDomain: "angular-auth-34879.firebaseapp.com",
   databaseURL: "https://angular-auth-34879.firebaseio.com",
   projectId: "angular-auth-34879",
   storageBucket: "angular-auth-34879.appspot.com",
   messagingSenderId: "849753583715"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
