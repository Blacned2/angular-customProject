import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { userModel } from 'src/app/models/userModel';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-typehead-focus',
  templateUrl: './typehead-focus.component.html',
})
export class TypeheadFocusComponent extends UserComponent{

    public model: any;
  
    search: OperatorFunction<any, readonly any[]> = (text$: Observable<any>) =>
      text$.pipe(
        debounceTime(200),
        map(term => term === '' ? []
          : this.userItem.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      )
  
    formatter = (x: {name: string}) => x.name;
  
}
