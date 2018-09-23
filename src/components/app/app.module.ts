import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CarouselModule} from 'angular2-carousel';

import {AppComponent} from './app.component';
import {AudioPlayerComponent} from '../audio-player/audio-player.component';
import {WaitSpinnerComponent} from '../wait-spinner/wait-spinner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    WaitSpinnerComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
