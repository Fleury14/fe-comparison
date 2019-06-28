import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from './components/main/main.module';
import { CommonComponentModule } from './components/common/common-component.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SegmentListService } from './services/segment-list/segment-list.service';
import { RunnerService } from './services/runners/runners.service';

@NgModule({
  declarations: [
    AppComponent, routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CommonComponentModule,
    
  ],
  providers: [ SegmentListService, RunnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
