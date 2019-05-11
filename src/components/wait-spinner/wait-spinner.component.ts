import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wait-spinner',
  templateUrl: './wait-spinner.component.html',
  styleUrls: ['./wait-spinner.component.scss']
})
export class WaitSpinnerComponent implements OnInit {
  @Input() width = null;
  @Input() height = null;

  counter = 0;
  delay = 1000;

  constructor() {
  }

  ngOnInit() {
    this.increment();
  }

  increment() {
    setTimeout(() => {
      this.counter++;
      this.increment();
    }, this.delay);
  }

}
