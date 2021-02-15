import {AfterViewInit, ChangeDetectionStrategy, Component, Input, NgZone, OnDestroy} from '@angular/core';

@Component({
  selector: 'wait-spinner',
  templateUrl: './wait-spinner.component.html',
  styleUrls: ['./wait-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitSpinnerComponent implements AfterViewInit, OnDestroy {
  @Input() width = null;
  @Input() height = null;

  counter = 0;
  delay = 1000;
  allowTimeout = false;

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit() {
    this.increment();
  }

  ngOnDestroy() {
    this.allowTimeout = false;
  }

  increment() {
    const flippedElement = document.getElementById('flipper');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.counter++;
        if (flippedElement) {
          flippedElement.style.transform = 'rotateY(' + 180 * this.counter + 'deg)';
        }
        if (this.allowTimeout) {
          this.increment();
        }
      }, this.delay);
    });
  }

}
