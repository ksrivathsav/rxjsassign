import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer-operator',
  templateUrl: './timer-operator.component.html',
  styleUrls: ['./timer-operator.component.css']
})
export class TimerOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    interval(5000).subscribe((data) => {
      console.log(data);
    });

    timer(5000, 5000).subscribe((data) => {
      console.log(data);
    });
  }
}
