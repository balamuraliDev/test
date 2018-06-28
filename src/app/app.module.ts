import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common'


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule,Meta,Title } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';



import { HomeComponent } from './component/home/home.component';
import { SearchResultsComponent } from './component/searchResults/searchResults.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //NgbModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [ AppComponent]
})
export class AppModule {


}
