import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-post',
  templateUrl: './post-post.component.html',
})
export class PostPostComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  ngOnInit(): void {
  }

  onSubmit(data: postPosts) {
    this.httpClient.post(this.postUrl, data)
      .subscribe((result) => {
        console.warn("result", result)
        this.router.navigate(['posts'])
      })
      console.warn(data);
  }
}

interface postPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}