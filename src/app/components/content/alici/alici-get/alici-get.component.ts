import { Component, Input, OnInit } from '@angular/core';
import { aliciModel } from 'src/app/models/aliciModel';
import { HttpClient } from '@angular/common/http';
import { AliciEditComponent } from '../alici-edit/alici-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AliciListesiService } from 'src/app/services/alici-listesi.service';

@Component({
  selector: 'app-alici-get',
  templateUrl: './alici-get.component.html',
  styleUrls: ['./alici-get-component.css'],
})
export class AliciGetComponent implements OnInit {

  pageSize: number = 10;
  page: number = 1;

  aliciPage: number = 1;
  aliciMaxPage: number;
  item: any;
  constructor(private aliciClient: HttpClient,private modalService: NgbModal,private aliciService:AliciListesiService) { }

  aliciObj:any;
  aliciItems: aliciModel[] = [{ alicilar: { address: '', aliciID: 0, aliciName: '', aliciTelNo: '' }, maxPage: 0 }];
  aliciDeleteUrl = 'https://localhost:44350/api/Alicilar/AliciSil/';
  aliciUrl = 'https://localhost:44350/api/Alicilar/AliciList/';

  ngOnInit(): void {
    this.getAlicilar();
  }
  aliciEditSinifi: AliciEditComponent;
  getAlicilar() {
    this.aliciClient.get<aliciModel[]>(this.aliciUrl + this.aliciPage).subscribe((response) => {
      this.aliciItems = response;
      this.aliciMaxPage = this.aliciItems['maxPage'] * 0.1;
    });
  }


  aliciDelete(id: number) {
    if (id !== null) {
      this.aliciClient.delete<number>(this.aliciDeleteUrl + id).subscribe((response => {
        this.getAlicilar();
      }))
    } else {
      console.log('error!');
    }
  }

  prevPage() {
    if (this.aliciPage > 1) {
      this.aliciPage -= 1;
      this.getAlicilar();
    }
  }
  nextPage() {
    if (this.aliciPage < this.aliciMaxPage) {
      this.aliciPage += 1;
      this.getAlicilar();
    }
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  
}
