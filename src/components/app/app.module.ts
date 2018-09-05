import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CarouselModule} from 'angular2-carousel';

import { AppComponent } from './app.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
