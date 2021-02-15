import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent implements OnInit {
  showWaitSpinner = true;
  iFrameLoaded = false;
  timeInSeconds = 0;

  constructor(private _cdr: ChangeDetectorRef) {
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
        this._cdr.detectChanges();
      }
    }, 1000);
  }

  onIframeLoaded() {
    this.iFrameLoaded = true;
    this._cdr.detectChanges();
  }
}
