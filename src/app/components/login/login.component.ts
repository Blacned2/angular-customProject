import { Component, OnInit } from '@angular/core';
import { aliciModel } from 'src/app/models/aliciModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data:aliciModel['alicilar']){

  }
}
