import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {CarouselComponent} from 'ngx-carousel-lib';
import {Song} from '../../entities/Song';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioPlayerComponent implements AfterViewInit {

  @Input() songs: Array<Song>;
  @ViewChild('coversCarousel') coversCarousel: CarouselComponent;
  @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;
  @ViewChild('volume') volume: ElementRef;

  @Output() imageLoaded: EventEmitter<boolean> = new EventEmitter();

  currentSongIndex = 0;
  _currentProgressWidth = 0;
  currentVolumeHeight = 0;
  isPlayed = false;
  isMuted = false;
  isHighlighted = false;
  currentSongPath: string;
  timeLine: HTMLElement;

  set currentProgressWidth(value: number) {
    this.setTimeLineWidth(value);
    this._currentProgressWidth = 0;
  }

  get currentProgressWidth(): number {
    return this._currentProgressWidth;
  }

  constructor() {
  }

  ngAfterViewInit() {
    this.timeLine = document.getElementById('time-line');
    this.currentSongPath = this.songs[this.currentSongIndex].audioSrc;
    const player = this.audioPlayer.nativeElement;
    player.src = this.currentSongPath;
    player.load();
    player.onended = () => {
      this.currentProgressWidth = 0;
      this.selectTrack((this.currentSongIndex + 1) % this.songs.length);
    };
    player.ontimeupdate = () => {
      this.updateTimeLine(player);
    };

    this.currentVolumeHeight = this.volume.nativeElement.offsetHeight * player.volume;
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

  goToTime(event) {
    const lineSizes = event.currentTarget.getBoundingClientRect();
    const position = event.offsetX / lineSizes.width;
    const player = this.audioPlayer.nativeElement;
    player.currentTime = player.duration * position;
    this.updateTimeLine(player);
  }

  updateTimeLine(player) {
    this.currentProgressWidth = player.currentTime / player.duration * 100;
  }

  setTimeLineWidth(value: number) {
    this.timeLine.style.width = value + '%';
  }

  setVolume(event) {
    const lineSizes = event.currentTarget.getBoundingClientRect();
    const volume = 1 - event.offsetY / lineSizes.height;
    const player = this.audioPlayer.nativeElement;
    if (volume > 0.1) {
      player.volume = volume;
      this.currentVolumeHeight = lineSizes.height - event.offsetY;
    } else {
      player.volume = 0;
      this.currentVolumeHeight = 0;
    }
    this.isMuted = false;
  }

  muteVolume() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audioPlayer.nativeElement.volume = 0;
    } else {
      this.audioPlayer.nativeElement.volume = this.currentVolumeHeight / this.volume.nativeElement.offsetHeight;
    }
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
