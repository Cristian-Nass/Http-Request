import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  @ViewChild('postForm', { static: false }) createForm: NgForm;
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      // console.log(response);
      this.posts = response;
    });
   }

  ngOnInit() {
  }

  onCreatePost(postData: {title: string; body: string}) {
    // console.log(postData);
    this.http.post( this.url, postData ).subscribe( data => {
      console.log(data);
      this.posts.splice(0, 0, postData);
    });
    this.createForm.reset();
  }
}
