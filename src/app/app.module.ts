import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatTabsModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarFormBaseComponent } from './components/car-form-base/car-form-base.component';
import { CarFormDetailComponent } from './components/car-form-detail/car-form-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarFormBaseComponent,
    CarFormDetailComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
