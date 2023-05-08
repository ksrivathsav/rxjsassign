import { Component, OnInit } from '@angular/core';
import { bufferCount, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-count-operator',
  templateUrl: './buffer-count-operator.component.html',
  styleUrls: ['./buffer-count-operator.component.css']
})
export class BufferCountOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // interval(1000)
    //   .pipe(bufferCount(3))
    //   .subscribe((data) => console.log(data));

    interval(1000)
      .pipe(bufferCount(3, 2))
      .subscribe((data) => console.log(data));
  }
}