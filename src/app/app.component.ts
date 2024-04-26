import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayDesignComponent } from './display-design/display-design.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDesignComponent ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: []
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<app-display-design></app-display-design>',
})
export class AppComponent {}
