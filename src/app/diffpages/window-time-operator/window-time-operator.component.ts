import { Component } from '@angular/core';
import { interval, windowTime, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-window-time-operator',
  templateUrl: './window-time-operator.component.html',
  styleUrls: ['./window-time-operator.component.css']
})
export class WindowTimeOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(500);

    source$
      .pipe(
        windowTime(2000, 5000),
        mergeMap((val) => val.pipe(toArray()))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
