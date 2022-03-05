import { Component, OnInit } from '@angular/core';
import { postModel } from 'src/app/models/postModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  postItems:postModel[] = [];
  
  pageSize:number = 0;
  page:number = 1;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.httpClient.get<postModel[]>(this.postUrl).subscribe(response => {
      this.postItems = response;
      console.log(this.postItems)
      this.pageSize = response.length / 10;
    });
  }
}
