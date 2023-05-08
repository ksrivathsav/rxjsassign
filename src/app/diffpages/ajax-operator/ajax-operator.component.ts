import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.css']
})
export class AjaxOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    ajax(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(
        map((response: Response: any>) => {
          return response;
          let data = [];
          for (let post of response.response) {
            data.push(post.title);
          }
          return data;
        })
      )
      .subscribe((data: any) => {
        console.log(data);
      });

    ajax
      .getJSON(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((data) => {
        console.log(data);
      });

    ajax({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        leela: 'Leela Web Dev',
      },
      body: {
        title: 'Leela Web Dev',
      },
    }).subscribe((data) => {
      console.log(data);
    });
  }
}

function ajax(arg0: string) {
  throw new Error('Function not implemented.');
}

