import { Component, OnInit } from '@angular/core';
import { todoModel } from 'src/app/models/todoModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
})
export class TodoComponentComponent implements OnInit {

  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoItem: todoModel[] = [];

  pageSize:number=0;
  page:number = 1;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
    console.log('todo calisti')
  }


  getTodos() {
    this.httpClient.get<todoModel[]>(this.todoUrl).subscribe(response => {
      this.todoItem = response; 
      console.log(this.todoItem);
      this.pageSize = this.todoItem.length / (this.todoItem.length*0.05);
    });
  }
}
