import { Component, OnInit } from '@angular/core';
import { of, concatMapTo, map } from 'rxjs';

@Component({
  selector: 'app-concat-operator',
  templateUrl: './concat-operator.component.html',
  styleUrls: ['./concat-operator.component.css']
})
export class ConcatMapToOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMapTo(
          ajax<string>(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
            map(function (data: Response<string>): any {
              return data.response;
            })
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
function ajax<T>(arg0: string) {
  throw new Error('Function not implemented.');
}

