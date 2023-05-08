import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-obervable',
  templateUrl: './new-obervable.component.html',
  styleUrls: ['./new-obervable.component.css']
})
export class NewObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      let timer = 0;
      for (let i = 0; i <= 5; i++) {
        observer.next(i);
      }
      observer.complete();
      observer.next(1000);
    });

    let observer = {
      next: (data: number) => console.log('observer 1' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done'),
    };

    newObservable.subscribe(observer);

    newObservable.subscribe({
      next: (data: number) => console.log('observer 2' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done'),
    });

    newObservable.subscribe(
      (data) => console.log('observer 3' + data),
      (error) => console.log(error),
      () => console.log('complete done')
    );

  }
}
