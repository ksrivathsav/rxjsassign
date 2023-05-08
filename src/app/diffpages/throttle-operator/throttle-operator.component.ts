import { Component } from '@angular/core';
import { interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.css']
})
export class ThrottleOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        throttle((value) => interval(2000), { leading: true, trailing: false })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
