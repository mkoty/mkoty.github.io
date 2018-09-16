import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'wait-spinner',
  templateUrl: './wait-spinner.component.html',
  styleUrls: ['./wait-spinner.component.scss']
})
export class WaitSpinnerComponent implements OnInit {

  counter = 0;
  delay = 1500;

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
