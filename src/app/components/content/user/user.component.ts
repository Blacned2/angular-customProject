import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  userUrl = 'https://jsonplaceholder.typicode.com/users';
  userItem: userModel[] = [];

  pageSize: number = 0;
  page: number = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get<userModel[]>(this.userUrl).subscribe(response => {
      this.userItem = response;
      console.log(this.userItem)
      this.pageSize = response.length;
    });
  }
  
}
