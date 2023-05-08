import { Component } from '@angular/core';
import { interval, windowCount, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-window-count-operator',
  templateUrl: './window-count-operator.component.html',
  styleUrls: ['./window-count-operator.component.css']
})
export class WindowCountOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(500);

    source$
      .pipe(
        windowCount(3, 1),
        mergeMap((val) => val.pipe(toArray()))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
