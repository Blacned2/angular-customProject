import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { aliciModel } from 'src/app/models/aliciModel';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item: aliciModel['alicilar'] = { aliciID: null, address: null, aliciName: null, aliciTelNo: null };
  @Input() deleteProcess: boolean = false;
  aliciObj: aliciModel['alicilar'] = { aliciID: 0, address: '', aliciName: '', aliciTelNo: '' }; //Instance
  aliciPostUrl = 'https://localhost:44350/api/Alicilar/AliciEkleGuncelle';
  singleAliciUrl = 'https://localhost:44350/api/Alicilar/SingleAlici/';
  aliciDeleteUrl = 'https://localhost:44350/api/Alicilar/AliciSil/';


  constructor(private modalService: NgbModal, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

  }

  onSubmit(data: aliciModel['alicilar']) {
    console.log(this.item)
    if (this.item.aliciID > 0 && this.item.address !== '' && this.item.aliciName !== '' && this.item.aliciTelNo !== '' && this.deleteProcess == false) {
      if (this.item.aliciID > 0) {
        this.httpClient.post<aliciModel['alicilar']>(this.aliciPostUrl + '?id=' + this.item.aliciID, data).subscribe((result) => {
          console.warn('result', result);
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      }
    }
    else {
      if (this.deleteProcess = true) {
        this.httpClient.delete<number>(this.aliciDeleteUrl + this.item.aliciID).subscribe(() => {
          this.modalService.dismissAll();
          this.newItemEvent.emit();
        })
      } else {
        alert('You did not correctly fill the form');
      }
    }
  }

  onPostSubmit(data:aliciModel['alicilar']){
    console.log(this.item);
    if(this.item.aliciID == null){
      this.httpClient.post<aliciModel['alicilar']>(this.aliciPostUrl,data).subscribe((result) => {
        console.warn('result',result);
        this.modalService.dismissAll();
        this.newItemEvent.emit();
      })
    }
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
