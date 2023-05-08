import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.css']
})
export class TakeUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.buttonEvent = fromEvent(
      document.getElementById('takeUntil')!,
      'click'
    );
  }

  startTimer() {
    interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
  }
}
