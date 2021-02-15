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
  intervalReference;

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit() {
    this.increment();
  }

  ngOnDestroy() {
    clearInterval(this.intervalReference);
  }

  increment() {
    const flippedElement = document.getElementById('flipper');
    this.ngZone.runOutsideAngular(() => {
      this.intervalReference = setInterval(() => {
        this.counter++;
        if (flippedElement) {
          flippedElement.style.transform = 'rotateY(' + 180 * this.counter + 'deg)';
        }
      }, this.delay);
    });
  }
}
