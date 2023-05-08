import { Component, OnInit } from '@angular/core';
import { of, max } from 'rxjs';

@Component({
  selector: 'app-max-operator',
  templateUrl: './max-operator.component.html',
  styleUrls: ['./max-operator.component.css']
})
export class MaxOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let persons = [
      { name: 'Leela', age: 20 },
      { name: 'Mathew', age: 30 },
      { name: 'John', age: 10 },
    ];

    of(...persons)
      .pipe(
        max((prevPerson, currPerson) =>
          prevPerson.age > currPerson.age ? -1 : 1
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
