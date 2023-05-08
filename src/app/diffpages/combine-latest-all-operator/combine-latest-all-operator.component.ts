import { Component, OnInit } from '@angular/core';
import { of, map, interval, take, combineLatestAll } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all-operator',
  templateUrl: './combine-latest-all-operator.component.html',
  styleUrls: ['./combine-latest-all-operator.component.css']
})
export class CombineLatestAllOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of('a', 'b', 'c');

    source$
      .pipe(
        map((value) => {
          return interval(1000).pipe(take(4));
        }),
        combineLatestAll()
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
