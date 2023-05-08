import { Component } from '@angular/core';
import { interval, mergeMap, pipe, toArray, windowWhen } from 'rxjs';

@Component({
  selector: 'app-window-when-operator',
  templateUrl: './window-when-operator.component.html',
  styleUrls: ['./window-when-operator.component.css']
})
export class WindowWhenOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(500);

    source$
      .pipe(
        windowWhen(() => interval(2000)),
        mergeMap((val) => val.pipe(toArray()))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
