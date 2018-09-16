import {AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {CarouselComponent} from 'angular2-carousel';
import {Song} from '../../Entities/Song';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AudioPlayerComponent implements AfterViewInit {

  @Input() songs: Array<Song>;
  @ViewChild('coversCarousel') coversCarousel: CarouselComponent;
  @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;

  currentSongIndex = 1;
  currentSongPath: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.currentSongPath = this.songs[this.currentSongIndex].audioSrc;
    this.audioPlayer.nativeElement.src = this.currentSongPath;
    this.audioPlayer.nativeElement.load();
    this.audioPlayer.nativeElement.onended = () => {
      this.selectTrack((this.currentSongIndex + 1) % this.songs.length);
    };
  }

  loadAudio(path) {
    this.audioPlayer.nativeElement.src = path;
    this.audioPlayer.nativeElement.load();
    this.audioPlayer.nativeElement.play();
  }

  selectTrack(newIndex: number) {
    this.currentSongIndex = newIndex;
    this.currentSongPath = this.songs[newIndex].audioSrc;
    this.coversCarousel.slideTo(newIndex);
    this.loadAudio(this.currentSongPath);
  }

}
