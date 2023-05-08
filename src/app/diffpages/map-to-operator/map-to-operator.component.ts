import { Component, OnInit } from '@angular/core';
import { interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to-operator',
  templateUrl: './map-to-operator.component.html',
  styleUrls: ['./map-to-operator.component.css']
})
export class MapToOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(500)
      .pipe(mapTo('LeelaWebDev'))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
