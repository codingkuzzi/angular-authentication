import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthenticationService} from './providers/auth.service';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { routing } from './app.routing';

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
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [ AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
