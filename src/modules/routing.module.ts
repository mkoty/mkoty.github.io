import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AudioPlayerComponent} from '../components/audio-player/audio-player.component';
import {VideoPlayerComponent} from '../components/video-player/video-player.component';

const routes: Routes = [
  {path: '', redirectTo: 'video', pathMatch: 'full'},
  {
    path: 'audio',
    component: AudioPlayerComponent
  },
  {
    path: 'video',
    component: VideoPlayerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
