import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  showWaitSpinner = true;
  iFrameLoaded = false;
  timeInSeconds = 0;

  constructor() {
  }

  ngOnInit() {
    this.waitSpinnerTimer(2);
  }

  waitSpinnerTimer(time: number) {
    setTimeout(() => {
      this.timeInSeconds++;
      if (this.timeInSeconds < time) {
        this.waitSpinnerTimer(time);
      } else {
        this.showWaitSpinner = false;
      }
    }, 1000);
  }
}
