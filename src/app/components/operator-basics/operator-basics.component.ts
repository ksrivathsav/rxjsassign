import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-operator-basics',
  templateUrl: './operator-basics.component.html',
  styleUrls: ['./operator-basics.component.css']
})
export class OperatorsBasicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = interval(1000);

    newObservable.subscribe((number) => {
      if (number % 2 === 0) {
        console.log('Even Number: ' + number);
      }
    });

    newObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((number) => {
          return 'even number:' + number;
        })
      )
      .subscribe((number) => {
        console.log(number);
      });
  }
}
