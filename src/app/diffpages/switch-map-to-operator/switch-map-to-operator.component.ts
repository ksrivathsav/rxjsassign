import { Component } from '@angular/core';
import { switchMapTo, interval, take } from 'rxjs';

@Component({
  selector: 'app-switch-map-to-operator',
  templateUrl: './switch-map-to-operator.component.html',
  styleUrls: ['./switch-map-to-operator.component.css']
})
export class SwitchMapToOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    interval(50)
      .pipe(switchMapTo(interval(10)), take(10))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
