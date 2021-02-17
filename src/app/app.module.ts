import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzDropDownModule,
  NzFormModule,
  NzInputModule,
  NzStepsModule, NzTableModule,
  NzToolTipModule,
  NzWaveModule,
} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pl_PL } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './shared/components/results/results.component';
import { Results2Component } from './shared/components/results2/results2.component';
import { Results3Component } from './shared/components/results3/results3.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

registerLocaleData(pl);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultsComponent,
    Results2Component,
    Results3Component,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    NzWaveModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NzInputModule,
    NzStepsModule,
    NzDropDownModule,
    NzToolTipModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'InteractiveScoreboard'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,
    NzTableModule
    // Only required for storage features
  ],
  providers: [{ provide: NZ_I18N, useValue: pl_PL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
