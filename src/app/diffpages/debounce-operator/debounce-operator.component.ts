import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, debounce, interval } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.css']
})
export class DebounceOperatorComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let buttonEvent = fromEvent(
      document.getElementById('button_debounce')!,
      'click'
    );

    buttonEvent.pipe(debounce((value) => interval(1000))).subscribe((data) => {
      console.log(data);
    });
  }
}