import { Component } from '@angular/core';
import { of, asapScheduler, asyncScheduler, merge, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.css']
})
export class SchedulersComponent {
  constructor() {}

  ngOnInit(): void {
    console.log('script starting');
    let queueScheduler$ = of('Queue Scheduler', queueScheduler);
    let asyncScheduler$ = of('Async Scheduler', asyncScheduler);
    let asapScheduler$ = of('Asap Scheduler', asapScheduler);

    merge(asyncScheduler$, queueScheduler$, asapScheduler$).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log('script Ending');
  }
}
