import { Component } from '@angular/core';
import { asyncScheduler, range } from 'rxjs';

@Component({
  selector: 'app-range-operator',
  templateUrl: './range-operator.component.html',
  styleUrls: ['./range-operator.component.css']
})
export class RangeOperatorComponent {
  constructor() {}

  ngOnInit(): void {
    console.log('start Scripting');
    let source$ = range(4, 1000, asyncScheduler);

    source$.subscribe((data) => {
      console.log(data);
    });
    console.log('end Scripting');
  }
}
