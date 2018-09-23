import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
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

  @Output() imageLoaded: EventEmitter<boolean> = new EventEmitter();

  currentSongIndex = 1;
  currentProgressWidth = 0;
  isPlayed = false;
  isHighlighted = false;
  currentSongPath: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.currentSongPath = this.songs[this.currentSongIndex].audioSrc;
    const player = this.audioPlayer.nativeElement;
    player.src = this.currentSongPath;
    player.load();
    player.onended = () => {
      this.currentProgressWidth = 0;
      this.selectTrack((this.currentSongIndex + 1) % this.songs.length);
    };
    player.ontimeupdate = () => {
      this.currentProgressWidth = player.currentTime / player.duration * 100;
    };
  }

  loadAudio(path) {
    this.audioPlayer.nativeElement.src = path;
    this.audioPlayer.nativeElement.load();
    this.audioPlayer.nativeElement.play();
    this.isPlayed = false;
    this.isHighlighted = false;
  }

  onPlay() {
    this.isPlayed = true;

    setTimeout(() => {
      this.isHighlighted = true;
    }, 200);
  }

  onPause() {
    this.isPlayed = false;
    this.isHighlighted = false;
  }

  selectTrack(newIndex: number) {
    if (this.currentSongIndex === newIndex) {
      const player = this.audioPlayer.nativeElement;
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }

      return;
    }
    this.currentSongIndex = newIndex;
    this.currentSongPath = this.songs[newIndex].audioSrc;
    this.coversCarousel.slideTo(newIndex);
    this.loadAudio(this.currentSongPath);
  }

  onImageLoad() {
    this.imageLoaded.emit(true);
  }

}
