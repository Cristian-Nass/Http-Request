import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      // console.log(response);
      this.posts = response;
    });
   }

  ngOnInit() {
  }

}
