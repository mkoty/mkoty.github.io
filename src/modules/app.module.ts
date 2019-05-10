import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-carousel-lib';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './routing.module';

import {AppComponent} from '../components/app/app.component';
import {AudioPlayerComponent} from '../components/audio-player/audio-player.component';
import {VideoPlayerComponent} from '../components/video-player/video-player.component';
import {WaitSpinnerComponent} from '../components/wait-spinner/wait-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    VideoPlayerComponent,
    WaitSpinnerComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
