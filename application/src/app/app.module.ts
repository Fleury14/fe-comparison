import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from './components/main/main.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SegmentListService } from './services/segment-list/segment-list.service';

@NgModule({
  declarations: [
    AppComponent, routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [ SegmentListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
