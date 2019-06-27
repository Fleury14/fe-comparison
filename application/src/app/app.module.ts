import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SegmentListService } from './services/segment-list/segment-list.service';

@NgModule({
  declarations: [
    AppComponent, routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SegmentListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
