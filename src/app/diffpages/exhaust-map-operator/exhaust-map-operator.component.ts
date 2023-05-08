import { Component, OnInit } from '@angular/core';
import { data, interval, filter, tap, exhaustMap, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.css']
})
export class ExhaustMapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(10)
      .pipe(
        filter((id) => id > 0),
        tap((id) => {
          console.log(id);
        }),
        exhaustMap((id: number) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
        }),
        take(5)
      )
      .subscribe((data) => {
        console.log(data.Response);
      });
  }
}

function ajax(arg0: string): any {
  throw new Error('Function not implemented.');
}
