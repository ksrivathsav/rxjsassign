import { Component, OnInit } from '@angular/core';
import { interval, share } from 'rxjs';

@Component({
  selector: 'app-share-operators',
  templateUrl: './share-operators.component.html',
  styleUrls: ['./share-operators.component.css']
})
export class ShareOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000).pipe(share());

    source$.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      source$.subscribe((data) => {
        console.log(data);
      });
    }, 2000);
  }
}
